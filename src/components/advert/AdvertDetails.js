import React, { Component } from 'react'
import './Advert.css'
import { getCurrentUser, getAdvertById, getAdvertImageURL, reportAdvertById } from '../../utils/APIUtils'
import Alert from 'react-s-alert'
import LoadingIndicator from '../../common/LoadingIndicator';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import ProfileDetails from '../../user/profile/profile-view/ProfileDetails'
import { Button } from 'react-bootstrap'

const AdvertContainer = styled.div`
    position: relative;
    padding: 1em 1em 1em 1em;
    display: grid;
    grid-template-columns: 20vw auto;
    grid-template-areas: 
        "ProfileDetails AdvertInfo";
        "ProfileDetails ReportForm";
`

const AdvertInfo = styled.div`
    display: block;
    text-align: center;
    margin-top: 1em;

    & > .crop-image {
        border-radius: 15px;
        min-width: 30vw;
        min-height: 30vh;
        max-width: 50vw;
        max-height: 50vh;
        overflow: hidden;
    }

    & > .title-panel {
        padding-left: 1em;
        text-align: left;
        position: relative;
    }

    & > .title-panel > .advert-title {
        margin-top: 0.5em;
        font-size: 3em;
        font-weight: bold;
    }

    & > .title-panel > .advert-date {
        text-align: right;
        position: absolute;
        right: 0.3em;
        bottom: 0.1em;
    }

    & > .title-panel > .advert-entries {
        text-align: right;
        position: absolute;
        right: 0.3em;
        bottom: 2em;
    }

    & * > .advert-additional-info {
        display: flex;
        flex-flow: wrap;
        flex: stretch;
        padding-left: 1.5em;
        padding-right: 1.5em;
        padding-bottom: 0.5em;

        & > .details-additional-info {
            min-width: 25%;
            width: 25%;
            max-width: 33%;

            & > label, p {
                width: 100%;
                text-align: center;
            }
        }
    }
`

const AdditionalActions = styled.div`
    display: block;
    flex: stretch;
    text-align: center;
    width: 100%;
    margin-top: 2em;
`

const ReportDialog = styled.div`
    align-items: center;
    text-align: center;
    padding: 2vh 1.5vw 2vh 1.5vw;
    z-index: 1000;
    position: absolute;
    background: #ffffff;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    border-radius: 15px;
    border: solid lightblue 3px;

    & > .report-comment {
        min-width: 30vw;
        min-height: 25vh;
    }

    & > .button {
        width: 5em;
        height: 3.5em;
        border: transparent;

        --webkit-transition: transform 150ms;
        transition: transform 150ms;

    }
    & > .button:hover {
        transform: scale(1.1, 1.1);
    }

    & * #report-button {
        background-color: lightgreen;
        margin-right: 1vw;
    }

    & * #cancel-button {
        background-color: salmon;
        margin-right: 1vw;
    }
`

const StyledLink = styled(Link)`
    background-color: lightblue;
    border-radius: 5px;
    border: none;
    padding: 0.2em;
    background-color: lightblue;
    border-radius: 5px;
    padding: 0.2em;
    text-decoration: none;
    color: white;
    margin-top: 1em;
    font-size: 1.2em;
    --webkit-transition: transform 150ms;
    transition: transform 150ms;

    &:hover {
        text-decoration: none;
        color: white;
        border: solid dodgeblue 3px;
        transform: scale(1.2, 1.2);
    }
`

const StyledButton = styled(Button)`
    background-color: lightblue;
    border: none;
    border-radius: 5px;
    padding: 0.2em;
    background-color: lightblue;
    border-radius: 5px;
    padding: 0.2em;
    text-decoration: none;
    color: white;
    margin-top: 1em;
    font-size: 1.2em;
    --webkit-transition: transform 150ms;
    transition: transform 150ms;
    &:hover {
        text-decoration: none;
        color: white;
        background-color: lightblue;
        border: solid dodgeblue 3px;
        transform: scale(1.4, 1.4);
    }

`

class ReportForm extends Component {

    constructor() {
        super()

        this.state = {
            advertId: 0,
            message: ""
        }
    }

    componentDidMount() {
        this.setState({
            advertId: this.props.advert_id
        })
    }

    handleReportSubmit() {
        this.props.reportAdvertHandler(this.state.advertId, this.state.message);
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value

        this.setState({
            message: value
        })
    }

    render() {
        return (
        <ReportDialog className="report-form">
            <p>Prześlij zgłoszenie</p>
            <textarea className="report-comment" type="text" placeholder="Komentarz" onChange={this.handleInputChange.bind(this)} />
            <div className="action-buttons">
                <Button id="report-button" className="button" onClick={this.handleReportSubmit.bind(this)}>Zgłoś</Button>
                <Button id="cancel-button" className="button" onClick={this.props.closeDialog}>Zamknij</Button>
            </div>
        </ReportDialog>
        )
    }
}

class AdvertDetails extends Component {

    constructor() {
        super()

        this.state = {
            loadingUser: true,
            loadingAdvert: true,
            user_adverts: [],
            showReportDialog: false
        }

        this.reportAdvertHandler = this.reportAdvertHandler.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
    }

    componentDidMount() {
        this.checkUserAdverts()
        this.getAdvert(this.props.match.params.advert_id)
    }

    checkUserAdverts() {
        this.setState({
            loadingUser: true
        })
        getCurrentUser()
            .then(response => {
                const adverts = response['adverts']
                for(let i = 0; i < adverts.length; i++) {
                    this.state.user_adverts.push(adverts[i]['id'])
                }
                this.setState({
                    loadingUser: false,
                    current_user_id: response['profileView']['id']
                }, () => {
                    console.log(this.state.current_user_id);
                })
            }).catch(error => {});
    }

    getAdvert(id) {
        const advertRequest = {
            "id": id
        }

        getAdvertById(advertRequest)
            .then(response => {
                this.setState({
                    advertInfo: {
                        title: response['title'],
                        description: response['description'],
                        tags: response['tags'],
                        image: response['pic'],
                        date: response['date'],
                        id: response['id'],
                        infos: response['additionalInfo'],
                        authorId: response['profileId'],
                        entries: response['entryCount']
                    },
                    loadingAdvert: false
                })
            }).catch(error => {
                Alert.error(error.message)
            });
    }

    componentWillUnmount() {
        this.setState({
            loadingAdvert: true,
            loadingUser: true
        })
    }

    getAdditionalInfo(infos) {
        let infos_arr = []
        for (var key in infos) {
            let item = infos[key]
            infos_arr.push(
                <div className="details-additional-info" key={item.name}>
                    <label htmlFor={key}><b>{key}</b>  
                    <p id={key}>{item}</p>
                    </label>
                </div>
            )
        }

        return infos_arr
    }

    reportAdvertHandler(id, message) {
        const reportRequest = {
            advertId: id,
            comment: message
        }

        reportAdvertById(Object.assign({}, reportRequest))
            .then(response => {
                this.setState({
                    reported: true
                })
                //Alert.ok("Ogłoszenie zostało wysłane do administratora! Dziękujemy za pomoc!")
            }).catch(error => {
                Alert.error(error.message)
            });

            this.setState({
                showReportDialog: false
            })
    }

    handleCommentUpdate = (event) => {
        this.setState({
            reportComment: event.target.value
        })
    }

    showReportDialog() {
        this.setState({
            showReportDialog: true
        })
    }

    closeDialog() {
        this.setState({
            showReportDialog: false
        })
    }

    render() {

        if(this.state.loadingAdvert)
            return <LoadingIndicator />

        let rating_enabled = this.state.current_user_id ? true : false
        rating_enabled = this.state.advertInfo.authorId === this.state.current_user_id ? false : true
        
        return (
            <AdvertContainer>
                <ProfileDetails 
                user_id={this.state.advertInfo.authorId} 
                show_adverts={false} 
                rating_enabled={rating_enabled}
                current_user_id={this.state.current_user_id}
                is_verified={this.state.isVerified}/>

                <AdvertInfo>
                    <img className="crop-image" src={getAdvertImageURL(this.state.advertInfo.id)} alt="Ad"></img>
                    <div className="title-panel">
                        <p className="advert-title">{this.state.advertInfo.title}</p>
                        <p className="advert-date">{'Data dodania: ' + this.state.advertInfo.date}</p>
                        <p className="advert-entries">{'Wyświetlenia: ' + this.state.advertInfo.entries}</p>
                    </div>
                    <div className="info-panel">
                        <p>Dodatkowe informacje: </p>
                        <div className="advert-additional-info">
                            { this.getAdditionalInfo(this.state.advertInfo.infos) }
                        </div>
                        <p className="advert-description">{this.state.advertInfo.description}</p>
                    </div>
                </AdvertInfo>
                <AdditionalActions>
                { !this.state.loadingUser && this.state.user_adverts.includes(this.state.advertInfo.id) ? (
                    <div className="edit-link">
                        <StyledLink className="link-to-edit" to={{
                            pathname: '/add',
                            advert: this.state.advertInfo
                        }}> Edytuj ogłoszenie </StyledLink>
                    </div>
                    ) : (null)
                }
                {
                    this.state.current_user_id && !this.state.reported ? (
                        <StyledButton onClick={this.showReportDialog.bind(this)}>Zgłoś</StyledButton>
                    ) : (null)
                }
                </AdditionalActions>
                {
                    this.state.showReportDialog ? (
                        <ReportForm 
                        advert_id={this.state.advertInfo.id} 
                        reportAdvertHandler={this.reportAdvertHandler}
                        closeDialog={this.closeDialog}/>
                    ) : (null)
                }
            </AdvertContainer>
        )
    }
}

export default AdvertDetails