import React, { Component } from 'react';
import styled from 'styled-components'
import Button from 'react-bootstrap/Button'
import { setAdvertStatus, setCaseStatus, getAdvertByAdvertId, getAdvertImageURL, getUnsolvedReports, getBannedAdverts } from '../../utils/APIUtils'
import { PageSelectionPanel } from '../advert/filters'
import LoadingIndicator from '../../common/LoadingIndicator'
import Alert from 'react-s-alert'

const AdvertTile = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 2vh 6vw 2vh 6vw;
    overflow: hidden;
    items-align: center;

    --webkit-transition: transform 250ms;
    transition: transform 250ms;

    &:hover {
        transform: scale(1.1, 1.1);
        filter: drop-shadow(16px 16px 20px rgba(0, 0, 0, 0.19));
    }
`

const PanelFragment = styled.div`
    width: 100%;
    display: block;
    text-align: center;

    & > span > h1, p {
        margin-left: 2vh;
    }
`

const ReportDetails = styled.div`
    display: inherit;
    margin: 1vh auto 1vh 0.5vw;
    flex-grow: 1;

    & > .advert-photo {
        width: 8vw;
        height: 8vw;
        object-fit: cover;
    }
`

const ButtonDiv = styled.div`
    display: flex;
    margin: 1vh 0.5vw 1vh 0.5vw;
    width: auto;
    align-items: center;
    flex-wrap: wrap;

    & > .button {
        width: 5em;
        height: 3.5em;
        border: transparent;

        --webkit-transition: transform 150ms;
        transition: transform 150ms;

        &:hover {
            transform: scale(1.1, 1.1)
        }
    }

    & > #accept-button {
        background-color: lightgreen;
        margin-right: 1vw;
    }

    & > #decline-button {
        background-color: salmon;
        margin-right: 1vw;
    }
`

class AdvertField extends Component {

    constructor() {
        super()

        this.state = {
            advert: null,
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })

        getAdvertByAdvertId(this.props.advert.id)
        .then(response => {
            this.setState({
                advert: response
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })

    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    render() {
        console.log(this.props)
        if(!this.state.mounted) {
            return <LoadingIndicator />
        }
        return (
            <AdvertTile className="advert-tile">
                <ReportDetails>
                    <img src={getAdvertImageURL(this.props.advertId)} alt="Ad" className="advert-photo"></img>
                    {
                        this.state.advert !== null ? (
                            <div>
                                <p>Tytuł: {this.state.advert.title}</p>
                                <p>Raport przez: {this.props.advert.reportingUserName}</p>
                                <p>Dodano przez: {this.state.advert.profileName}</p>
                                <p>Komentarz: {this.props.advert.comment}</p>
                            </div>
                        ) : (
                            <div></div>
                        )
                    }
                </ReportDetails>
                <ButtonDiv>
                    <Button className="button" id="accept-button" onClick={() => this.props.approveButtonHandler(this.props.advertId, this.state.advert.id)}>OK</Button>
                    { this.props.declineVisible ? (
                        <Button className="button" id="decline-button" onClick={() => this.props.declineButtonHandler(this.state.advert.id)}>NO</Button>
                    ) : (
                        <div></div>
                    )
                    }
                </ButtonDiv>
            </AdvertTile>
        )
    }
}


class ReportedAdverts extends Component {

    constructor() {
        super()

        this.state = {
            reported: {
                pageCount: 0,
                currentPage: 0,
                advertList: [],
            },
            banned: {
                pageCount: 0,
                currentPage: 0,
                advertList: []
            },
            mounted: false
        }
    }

    loadReported() {
        getUnsolvedReports(this.state.reported.currentPage, 3)
        .then(response => {
            console.log(response)
            this.setState({
                reported: {
                    ...this.state.reported,
                    pageCount: response['totalPages'],
                    advertList: response['content']
                }
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    loadBanned() {
        getBannedAdverts(this.state.banned.currentPage, 3)
        .then(response => {
            console.log(response)
            this.setState({
                banned: {
                    ...this.state.reported,
                    pageCount: response['totalPages'],
                    advertList: response['content']
                }
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })

        this.loadReported()
        this.loadBanned()
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    reportedPageChange(newPage) {
        this.setState({
            reported: {
                ...this.state.reported,
                currentPage: newPage
            }
        }, () => {
            this.loadReported()
        })
    }

    bannedPageChange(newPage) {
        this.setState({
            banned: {
                ...this.state.banned,
                currentPage: newPage
            }
        }, () => {
            this.loadBanned()
        })
    }

    acceptReport(id, caseId) {
        setCaseStatus(caseId, "solved")
        .then(() => {
            //Alert.ok("Pomyślnie przyjęto zgłoszenie")

            setAdvertStatus(id, "BANNED")
            .then(() => {
                //Alert.ok("Ogłoszenie zostało zbanowane!")
                this.reportedPageChange(this.state.reported.currentPage)
                this.bannedPageChange(this.state.banned.currentPage)
            })
            .catch(error => {
                Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    declineReport(caseId) {
        setCaseStatus(caseId, "solved")
        .then(response => {
            //Alert.ok("Pomyślnie odrzucono zgłoszenie")
            this.reportedPageChange(this.state.reported.currentPage)
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    unbanAdvert(id, caseId) {
        setAdvertStatus(id, "OK")
        .then(() => {
            //Alert.ok("Ogłoszenie zostało odbanowane!")
            this.bannedPageChange(this.state.banned.currentPage)
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }

    render() {
        if(!this.state.mounted) {
            return <LoadingIndicator />
        }

        return (
            <PanelFragment>
                <span className="reported-adverts">
                    <h1 className="title-text">Zgłoszenia</h1>
                    {
                        this.state.reported.advertList.map((item) => (
                            <AdvertField 
                                key={item.id}
                                advert={item}
                                advertId={item.reportedAdvertId}
                                approveButtonHandler={this.acceptReport.bind(this)}
                                declineButtonHandler={this.declineReport.bind(this)}
                                declineVisible={true}  />
                        ))
                    }
                    <PageSelectionPanel 
                        pages={this.state.reported.pageCount} 
                        changeHandler={this.reportedPageChange.bind(this)}/>
                </span>.

                <span className="banned-adverts">
                    <h1 className="title-text">Zbanowane ogłoszenia</h1>
                    {
                        this.state.banned.advertList.map((item) => (
                            <AdvertField 
                                key={item.id} 
                                advert={item}
                                advertId={item.id}
                                approveButtonHandler={this.unbanAdvert.bind(this)}
                                declineVisible={false}  />
                        ))
                    }
                    <PageSelectionPanel 
                        pages={this.state.banned.pageCount} 
                        changeHandler={this.bannedPageChange.bind(this)}/>
                </span>
            </PanelFragment>
        )
    }
}

export default ReportedAdverts