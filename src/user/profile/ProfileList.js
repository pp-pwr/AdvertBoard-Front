import React, { Component } from 'react'
import LoadingIndicator from '../../common/LoadingIndicator';
import getUsers from '../../utils/APIUtils'
import Alert from 'react-s-alert'

class ProfileCell extends Component {
    constructor() {
        super()

        this.state = {
            user: {
                visibleName: "",
                firstName: "",
                lastName: ""
            }
        }

        this.mounted = false
    }

    componentDidMount() {
        this.mounted = true;
        const profile = this.props.profile
        this.setState({
            user: {
                ...this.state.user,
                visibleName: profile.visibleName,
                firstName: profile.firstName,
                lastName: profile.lastName
            }
        })
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        if(!this.mounted) {
            return <LoadingIndicator/>
        }

        return (
            <div>{this.state.visibleName}</div>
        )
    }
}

class ProfileList extends Component {
    constructor() {
        super()

        this.state = {
            filter: "",
            userList: []
        }

        this.mounted = false
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
            this.setState({
                userList: response['content']
            })
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
            
            </div>
            </div>
        )
    }
}

export default ProfileList