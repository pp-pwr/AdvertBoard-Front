import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Alert from "react-s-alert"

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from "../../constants"
import { signup } from "../../utils/APIUtils"

import "./Signup.css"
import googleLogo from "../../assets/images/google-logo.png"
import facebookLogo from "../../assets/images/fb-logo.png"

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target
        const inputName = target.name
        const inputValue = target.value

        this.setState({
            [inputName]: inputValue
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        const signUpRequest = Object.assign({}, this.state);

        signup(signUpRequest)
        .then(response => {
            Alert.success("Twoje konto zostało pomyślnie założone!. Zostaniesz teraz przekierowany do strony logowania.")
            this.props.history.push("/login")
        }).catch(error => {
            Alert.error((error && error.message) || "Wystąpił nieznany błąd! Skontaktuj się z administratorem!")
        })
    }

    render() {
        return (
            <div>dd</div>
        );
    }
}

class Signup extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>
        }
        return (
            <div class="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Zarejestruj się, aby w pełni korzystać z naszego serwisu!</h1>
                    <SignupForm {...this.props}/>
                    <span className="signup-link">Masz już konto?
                        <Link to="/login">Zaloguj się!</Link>
                    </span>
                    <div className="or-separator">
                        <span className="or-text">lub skorzystaj z logowania przez:</span>
                    </div>
                        <p>Miejsce na rejestracje OAuth2, Facebook!</p>
                </div>
            </div>
        );
    }
}

export default Signup