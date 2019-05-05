import React, { Component } from 'react'
import { getCurrentUser, getUserById, getAdvertImageURL } from '../../utils/APIUtils'
import Alert from 'react-s-alert'
import LoadingIndicator from '../../common/LoadingIndicator';
import { Redirect, Link } from 'react-router-dom'
import bike from '../../assets/images/bike.jpg'

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
        let advertPath = 'advertSummaryViews'
        if (!this.user_id) {
            advertPath = 'adverts'
        }
        this.setState({
            profile: {
                ...this.state.profile,
                firstName: userData['firstName'],
                lastName: userData['lastName'],
                visibleName: userData['visibleName'],
                telephoneNumber: userData['telephoneNumber'],
                contactMail: userData['contactMail'],
                adverts: userData[advertPath]
            }
        })
    }

    loadCurrentUser() {
        getCurrentUser().then(response => {
            console.log('aajjjj')
            console.log(response.profileView)
            if(this.mounted) {
                this.setUser(response.profileView)
            }
        }).catch(error => {
            Alert.error(error)
        })
    }

    loadUserById() {
        const user = {
            "profileId": this.user_id
        }

        const userRequest = Object.assign({}, user)
        
        getUserById(userRequest).then(response => {
            if(this.mounted) {
                this.setUser(response)
            }
        }).catch(error => {
            Alert.error((error && error.message) || "Ups!")
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

    handleAdvertClick = (id) => {
        this.props.history.push('/advert/' + id)
    }

    userAdvertList() {
        const user_adverts = []
        if (this.state.profile.adverts) {
            for(let i = 0; i < this.state.profile.adverts.length; i++) {
                let advert = this.state.profile.adverts[i]
                
                user_adverts.push(
                    <div key={advert.id} className="advert-list-element" onClick={() => this.handleAdvertClick(advert.id)}>
                        <img className="advert-list-element-image" src={getAdvertImageURL(advert.id)} alt="Ad"></img>
                        <p className="advert-list-element-title">{advert.title}</p>
                        <p className="advert-list-element-date">Data dodania: {advert.date}</p>
                    </div>
                )
            }
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

        return (
            <div className="profile-info">
                <div className="profile-data">
                    <p><b>Imię:</b> {this.state.profile.firstName}</p>
                    <p><b>Nazwisko:</b> {this.state.profile.lastName}</p>
                    <p><b>Nazwa wyświetlana:</b> {this.state.profile.visibleName}</p>
                    <p><b>Kontaktowy email:</b> {this.state.profile.contactMail}</p>
                    <p><b>Kontaktowy nr telefonu:</b> {this.state.profile.telephoneNumber}</p>
                </div>
                
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