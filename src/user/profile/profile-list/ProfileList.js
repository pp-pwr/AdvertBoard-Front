import React, { Component } from 'react'
import LoadingIndicator from '../../../common/LoadingIndicator';
import { getUsers } from '../../../utils/APIUtils'
import Alert from 'react-s-alert'
import bike from '../../../assets/images/bike.jpg'

import './ProfileList.css'

class ProfileCell extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                visibleName: "",
                id: null
            }
        }

        this.mounted = false
    }

    componentDidMount() {
        this.mounted = true;
        const profile = this.props.profile
        console.log(profile)
        this.setState({
            user: {
                ...this.state.user,
                visibleName: profile.visibleName,
                id: profile.id
            }
        })
    }

    redirectToPage = () => {
        this.props.onUserClick(this.state.user.id)
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        if(!this.mounted) {
            return <LoadingIndicator/>
        }

        return (
            <div className="userlist-element" onClick={this.redirectToPage}>
            <img src={bike} alt="ProfileImage" className="profile-image"></img>
            <div className="userlist-element-info">
                <p id="displayName"><b>{this.state.user.visibleName}</b></p>
            </div>
            </div>
        )
    }
}

class ProfileList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filter: "",
            userList: []
        }

        this.mounted = false
        this.showProfile = this.showProfile.bind(this)
    }

    componentDidMount() {
        this.mounted = true
        this.updateUserList()
    } 

    componentWillUnmount() {
        this.mounted = false
    }

    updateUserList = (page) => {
        const userRequest = {
            containsString: this.state.filter
        }
        getUsers(userRequest).then(response => {
            if(this.mounted) {
                this.setState({
                    userList: response['content']
                })
            }
        }).catch(error => {
            Alert.error((error && error.message) || "Ups! Coś poszło nie tak!")
        })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputValue = target.value;

        this.setState({
            filter: inputValue
        }) 
    }

    showProfile(id) {
        this.props.history.push({
            pathname: '/profile/user/' + id
          })
    }

    renderUserCells() {
        const user_cells = []

        if(this.state.userList) {
            for(let i = 0; i < this.state.userList.length; i++) {
                let user_profile = this.state.userList[i]

                user_cells.push(
                    <ProfileCell 
                        key={user_profile.id} 
                        profile={user_profile} 
                        history={this.props.history}
                        onUserClick={this.showProfile}/>
                )
            }
        }

        return user_cells
    }

    render() {
        if(!this.mounted) {
            return <LoadingIndicator />
        }

        return (
            <div className="userlist-container">
            <div className="userlist-search">
                <input className="search-box-field" type="text" name="currentUserFilter"
                                onChange={this.handleInputChange}/>
                <button className="btn btn-primary" onClick={this.updateUserList}>Filtruj</button>
            </div>
            <div className="userlist-content">
                { this.renderUserCells() }
            </div>
            </div>
        )
    }
}

export default ProfileList