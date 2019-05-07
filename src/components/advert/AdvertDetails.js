import React, { Component } from 'react'
import './Advert.css'
import { getCurrentUser, getAdvertById, getAdvertImageURL, reportAdvertById } from '../../utils/APIUtils'
import Alert from 'react-s-alert'
import LoadingIndicator from '../../common/LoadingIndicator';
import { Link } from 'react-router-dom'
import bike from '../../assets/images/bike.jpg'

class AdvertDetails extends Component {

    constructor() {
        super()

        this.state = {
            advertInfo: {
                title: "",
                description: "",
                tags: "",
                image: "",
                date: null,
                id: null
            },
            loadingUser: true,
            loadingAdvert: true,
            user: null,
            reportComment: "",
            user_adverts: []
        }
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
                    user: response
                })
            }).catch(error => {});
    }

    getAdvert(id) {
        const advertRequest = {
            "id": id
        }
        this.setState({
            loadingAdvert: true
        })
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
                        infos: response['additionalInfo']
                    }
                })
                this.setState({
                    loadingAdvert: false
                })
            }).catch(error => {
                Alert.error(error.message)
            });
    }

    reportAdvertHandler() {
        const reportRequest = {
            advertId: this.state.advertInfo.id,
            comment: this.state.reportComment
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
    }

    getAdditionalInfo(infos) {
        let infos_arr = []
        for (var key in infos) {
            let item = infos[key]
            infos_arr.push(
                <div className="details-additional-info" key={item.name}>
                    <label htmlFor={key}><b>{key}</b>:  
                    <p id={key}>{item}</p><br/><br/>
                    </label>
                </div>
            )
        }

        return infos_arr
    }

    handleCommentUpdate = (event) => {
        this.setState({
            reportComment: event.target.value
        })
    }

    render() {
        if(this.state.loadingAdvert)
            return <LoadingIndicator />

        return (
            <div>
                <p>{'Tytuł: ' + this.state.advertInfo.title}</p>
                <p>{'Opis: ' + this.state.advertInfo.description}</p>
                <p>{'Data: ' + this.state.advertInfo.date}</p>
                <p>Obrazek: </p><br/>
                <img className="crop-image" src={getAdvertImageURL(this.state.advertInfo.id)} alt="Ad"></img>
                <br/>
                { !this.state.loadingUser && this.state.user_adverts.includes(this.state.advertInfo.id) ? (
                    <Link className="" to={{
                        pathname: '/add',
                        advert: this.state.advertInfo
                    }}> Edytuj ogłoszenie </Link>
                ) : (
                    <div></div>
                )}
                <p>Dodatkowe informacje: </p>
                <div className="additional-info-holder">
                    { this.getAdditionalInfo(this.state.advertInfo.infos) }
                </div>

                {
                    this.state.user !== null && !this.state.reported ? (
                        <div>
                            <input type="text" placeholder="Komentarz" onChange={this.handleCommentUpdate.bind(this)} />
                            <input type="button" onClick={this.reportAdvertHandler.bind(this)} value="Zgłoś" />
                        </div>
                    ) : (
                        <div></div>
                    )
                }
            </div>
        )
    }
}

export default AdvertDetails