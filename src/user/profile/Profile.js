import React, { Component } from 'react'
import { getCurrentUser, getUserById } from '../../utils/APIUtils'
import Alert from 'react-s-alert'
import LoadingIndicator from '../../common/LoadingIndicator';
import { Redirect, Link } from 'react-router-dom'
import bike from '../assets/images/bike.jpg'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.current_user = null
        this.user_id = null

        this.state = {
            profile: {
                firstName: "",
                lastName: "",
                visibleName: "",
                telephoneNumber: null,
                contactMail: "",
                adverts: []
            }
        }

        this.mounted = false
    }

    setUser(userData) {
        console.log(userData)
        const profileView = userData['profileView']
        this.setState({
            profile: {
                ...this.state.profile,
                firstName: profileView['firstName'],
                lastName: profileView['lastName'],
                visibleName: profileView['visibleName'],
                telephoneNumber: profileView['telephoneNumber'],
                contactMail: profileView['contactMail'],
                adverts: userData['adverts']
            }
        })
    }

    loadCurrentUser() {
        getCurrentUser().then(response => {
            if(this.mounted) {
                this.setUser(response)
            }
        }).catch(error => {
            Alert.error(error)
        })
    }

    loadUserById() {
        const userRequest = {
            "profileId": this.user_id
        }
        getUserById(userRequest).then(response => {
            if(this.mounted) {
                this.setUser(response)
            }
        }).catch(error => {
            this.props.history.push('/error/noprofile')
        })
    }
    
    loadUserData() {
        if(this.user_id) {
            this.loadUserById()
        } else {
            this.loadCurrentUser()
        }
    }

    userAdvertList() {
        const user_adverts = []

        for(let i = 0; i < this.state.profile.adverts.length; i++) {
            let advert = this.state.profile.adverts[i]
            console.log(advert)
            user_adverts.push(
                <div className="advert-list-element">
                    <img className="crop-image" src={ 'data:image/png;base64,' + advert.pic.substring(22)} alt="Ad"></img>
                    <Link to={"/advert/" + advert.id}>{advert.title}</Link>
                </div>
            )
        }

        return user_adverts
    }

    componentDidMount() {
        this.user_id = this.props.match.params.user_id
        this.current_user = this.props.user
        this.mounted = true

        this.loadUserData()
    }

    componentWillUnmount() {
        this.mounted = false
    }

    render() {
        if(!this.mounted) {
            return <LoadingIndicator/>
        }
        
        if(this.current_user && this.current_user.profileView === null) {
            return <Redirect to='/profile/edit' />
        }

        console.log(this.state.profile)

        return (
            <div>
                <p><b>Imię:</b> {this.state.profile.firstName}</p>
                <p><b>Nazwisko:</b> {this.state.profile.lastName}</p>
                <p><b>Nazwa wyświetlana:</b> {this.state.profile.visibleName}</p>
                <p><b>Kontaktowy email:</b> {this.state.profile.contactEmail}</p>
                <p><b>Kontaktowy nr telefonu:</b> {this.state.profile.telephoneNumber}</p>
                
                { this.current_user ? (
                    <Link to="/profile/edit">Edytuj swój profil!</Link>
                ) : (
                    <div></div>
                )}

                <p><b>Ogłoszenia użytkownika:</b> </p>
                <div className="advert-list">
                    { this.userAdvertList() }
                </div>

                {/* <div>{this.state.user.adverts}</div> */}
            </div>
        )
    }
}


export default Profile