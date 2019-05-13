import React, { Component } from 'react'
import LoadingIndicator from '../../../common/LoadingIndicator';
import { updateProfile, getCurrentUser } from "../../../utils/APIUtils"
import Alert from 'react-s-alert'
import UserPreferences from './UserPreferences'

import '../profile-view/Profile.css'

class ProfileForm extends Component {
    constructor() {
        super()

        this.state = {
            user: {
                firstName: "",
                lastName: "",
                visibleName: "",
                telephoneNumber: 0,
                contactMail: "",
                categoryEntries: {}
            },
            mounted: false
        }


        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.updateCategoryPreferences = this.updateCategoryPreferences.bind(this)
    }

    componentDidMount() {
        if (this.props.user && this.props.user.profileView) {
            const profile = this.props.user.profileView
            this.setState({
                user: {
                    "firstName": profile['firstName'],
                    "lastName": profile['lastName'],
                    "visibleName": profile['visibleName'],
                    "telephoneNumber": profile['telephoneNumber'],
                    "contactMail": profile['contactMail']
                },
                mounted: true
            })
        } else {
            this.setState({
                mounted: true
            })
        }
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    updateCategoryPreferences(categoryIdList) {
        let categoryMap = {}

        for(var i = 0; i < categoryIdList.length; i++) {
            let name = categoryIdList[i]
            categoryMap = {
                ...categoryMap,
                [name]: 0.1
            }
        }

        this.setState({
            user: {
                ...this.state.user,
                categoryEntries: categoryMap
            }
        })
    }

    handleInputChange(event, inputFieldName) {
        this.setState({
            user: {
                ...this.state.user,
                [inputFieldName]: event.target.value
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const loginRequest = Object.assign({}, this.state.user)

        updateProfile(loginRequest).then(response => {
            Alert.success("Witaj, " + this.state.user.firstName + " " + this.state.user.lastName + ". Twoje nowe dane są teraz widoczne dla wszystkich użytkowników serwisu!")
        }).catch(error => {
            Alert.error((error && error.message) || "Wystąpił nieznany błąd! Skontaktuj się z administratorem!")
        })

        this.props.history.push('/profile/me')
    }

    render() {
        if (!this.state.mounted) {
            return <LoadingIndicator />
        }

        return (
            <div className="profile-set-container">
                <div className="profile-set-content">
                    <h1 className="signup-title">Uzupełnij informacje na swój temat!</h1>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-item">
                            <input type="text" name="firstName" className="form-control" placeholder="Imię"
                            value={this.state.user.firstName} onChange={ event => this.handleInputChange(event, 'firstName') } required/>
                        
                        </div>
                        <div className="form-item">
                            <input type="text" name="lastName" className="form-control" placeholder="Nazwisko"
                            value={this.state.user.lastName} onChange={ event => this.handleInputChange(event, 'lastName') } required/>
                        
                        </div>
                        <div className="form-item">
                            <input type="text" name="visibleName" className="form-control" placeholder="Wyświetlana nazwa użytkownika"
                            value={this.state.user.visibleName ? this.state.user.visibleName : " "} onChange={ event => this.handleInputChange(event, 'visibleName') } required/>
                        
                        </div>
                        <div className="form-item">
                            <input type="number" name="telephone_number" className="form-control" placeholder="Numer kontaktowy"
                            value={this.state.user.telephoneNumber} onChange={ event => this.handleInputChange(event, 'telephoneNumber') }/>
                    
                        </div>
                        <div className="form-item">
                            <input type="email" name="email" className="form-control" placeholder="Adres email do kontaktu"
                            value={this.state.user.contactMail} onChange={ event => this.handleInputChange(event, 'contactMail') }/>
                        
                        </div>

                        <div className="formItem">
                            <UserPreferences updateForm={this.updateCategoryPreferences}/>
                        </div>

                        <div className="form-item">
                        <button type="submit" className={`btn btn-block btn-primary`} onClick={ this.handleSubmit }>Wyślij</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default ProfileForm