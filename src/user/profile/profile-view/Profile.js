import React, { Component } from 'react'
import { getCurrentUser, getUserById, getAdvertImageURL} from '../../../utils/APIUtils'
import Alert from 'react-s-alert'
import LoadingIndicator from '../../../common/LoadingIndicator';
import { Redirect } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import styled from 'styled-components'


const Adverts = styled.div`
    padding-left: 1em;

    & > .title {
        font-size: 2em;
        font-weight: bold;
        margin-top: 1em;
        margin-bottom: 1em;
    }

    & * .advert-list-element {
        border-radius: 3px;
        min-width: 35vw;
    }
`

const ProfileContainer = styled.div`
    display: flex;
`

class Profile extends Component {
    constructor(props) {
        super(props)

        this.current_user = null
        this.user_id = null

        this.state = {
            adverts: [],
            mounted: false
        }
    }

    setUser(userData) {
        this.setState({
            adverts: this.user_id ? userData['advertSummaryViews'] : userData['adverts'],
            profile: {
                ...this.state.profile,
                id: this.user_id ? userData['id'] : userData['profileView']['id']
            }
        }, () => {
            console.log(this.state)
        })
    }

    loadCurrentUser() {
        getCurrentUser().then(response => {
            if(this.state.mounted) {
                this.setUser(response)
            }
        }).catch(error => {
            Alert.error((error && error.message) || "Ups!")
        })
    }

    getCurrentUser() {
        getCurrentUser().then(response => {
            this.setState({
                current_user: response
            })
        }).catch(error => {
            Alert.error((error && error.message) || "Ups!")
        })
    }

    loadUserById() {
        const user = {
            "profileId": this.user_id
        }

        const userRequest = Object.assign({}, user)
        
        getUserById(userRequest).then(response => {
            if(this.state.mounted) {
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
            this.getCurrentUser()
        } else {
            this.loadCurrentUser()
        }
    }

    handleAdvertClick = (id) => {
        this.props.history.push('/advert/' + id)
    }

    userAdvertList() {
        const user_adverts = []
        if (this.state.adverts) {
            for(let i = 0; i < this.state.adverts.length; i++) {
                let advert = this.state.adverts[i]
                
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

        if(this.props.user !== null && this.props.user !== undefined) {
            this.setState({
                current_user: this.props.user
            })
        }

        this.setState({
            mounted: true
        })

        this.loadUserData()
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    render() {
        if(!this.state.mounted || !this.state.profile) {
            return <LoadingIndicator/>
        }

        if(this.state.current_user && this.state.current_user.profileView === null) {
            return <Redirect to='/profile/edit' />
        }
        
        return (

            <ProfileContainer>
                <ProfileDetails 
                user_id={this.state.profile.id} 
                show_adverts={false} 
                rating_enabled={true}
                current_user_id={this.state.current_user ? this.state.current_user.profileView.id : null}
                is_verified={this.state.profile.isVerified}/>

                <Adverts>
                    <div className="title">Ogłoszenia użytkownika: </div>
                    <div className="advert-list">
                        { this.userAdvertList() }
                    </div>
                </Adverts>
                {/* <div>{this.state.user.adverts}</div> */}
            </ProfileContainer>
        )
    }
}


export default Profile