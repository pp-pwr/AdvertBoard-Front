import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Alert from "react-s-alert"

import "./Login.css"
import facebookLogo from "../../assets/images/fb-logo.png"
import googleLogo from "../../assets/images/google-logo.png"

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from "../../constants"
import { login } from "../../utils/APIUtils"

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange()
    }
}

class Login extends Component {
    componentDidMount() {
        //Działa tylko w przypadku przekierowania do /login spowodowanego
        //niepoprawnym logowaniem OAuth2
        if(this.props.location.state && this.props.state.rror) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    render() {
        //Jeśli użytkownik jest już zalogowany to jest przekierowany na stronę główną
        if(this.props.authenticated) {
            return (
                <Redirect to= {{
                    pathname: "/",
                    state: { from: this.props.location }
                }}/>
            );
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Zaloguj się do serwisu!</h1>
                    <p>Miejsce na formularz do logowania</p>
                    <span className="signup-link">Nie masz konta?
                        <Link to="/signup">Zarejestruj się!</Link>
                    </span>
                    <div className="or-separator">
                        <span className="or-text">lub skorzystaj z logowania przez:</span>
                    </div>
                    <p>Miejsce na logowanie OAuth2, Facebook!</p>
                </div>
            </div>
        );
    }
}

export default Login