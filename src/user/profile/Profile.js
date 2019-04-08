import React, { Component } from 'react'
import { getCurrentUser, getUserById } from '../../utils/APIUtils'
import Alert from 'react-s-alert'
import LoadingIndicator from '../../common/LoadingIndicator';
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.current_user = null
        this.user_id = null

        this.state = {
            user: {
                name: "",
                email: "",
                adverts: []
            }
        }

        this.mounted = false
    }

    setUser(userData) {
        console.log(userData)
        this.setState({
            user: {
                ...this.state.user,
                name: userData['name'],
                email: userData['email'],
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
            <div>
                <div>{this.state.user.name}</div>
                <div>{this.state.user.email}</div>
                {/* <div>{this.state.user.adverts}</div> */}
            </div>
        )
    }
}


export default Profile