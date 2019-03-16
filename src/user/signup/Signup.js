import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Alert from "react-s-alert"

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from "../../constants"
import { signup } from "../../utils/APIUtils"
import InputValidator from "../../utils/InputValidator"

import "./Signup.css"
import googleLogo from "../../assets/images/google-logo.png"
import facebookLogo from "../../assets/images/fb-logo.png"

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: '',
                email: '',
                password: '',
                password_confirm: ''
            }
        }

        this.validator = new InputValidator()

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event, inputFieldName) {
        const newState = Object.assign({}, this.state)
        newState.userInfo[inputFieldName] = event.target.value
        this.setState(newState)

        if(inputFieldName === 'password_confirm') {
            this.validator.updateValidator(inputFieldName, this.state.userInfo.password_confirm, this.state.userInfo.password)
        } else {
            this.validator.updateValidator(inputFieldName, event.target.value)
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if(this.validator.getStatus()) {
            const request_body = {
                login: this.state.userInfo.login,
                email: this.state.userInfo.email,
                password: this.state.userInfo.password
            }

            const signUpRequest = Object.assign({}, request_body)

            signup(signUpRequest)
            .then(response => {
                Alert.success("Twoje konto zostało pomyślnie założone!. Zostaniesz teraz przekierowany do strony logowania.")
                this.props.history.push("/login")
            }).catch(error => {
                Alert.error((error && error.message) || "Wystąpił nieznany błąd! Skontaktuj się z administratorem!")
            })
        } else {
            Alert.error("Formularz nie został poprawnie wypełniony!")
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-item">
                    <input type="text" name="login" className="form-control" placeholder="Login"
                    value={ this.state.userInfo.login } onChange={ event => this.handleInputChange(event, 'login') } required/>
                    { this.validator.displayValidatorErrors('login')}
                </div>
                <div className="form-item">
                    <input type="text" name="email" className="form-control" placeholder="Email"
                    value={ this.state.userInfo.email } onChange={ event => this.handleInputChange(event, 'email') } required/>
                    { this.validator.displayValidatorErrors('email')}
                </div>
                <div className="form-item">
                    <input type="password" name="password" className="form-control" placeholder="Hasło"
                    value={ this.state.userInfo.password } onChange={ event => this.handleInputChange(event, 'password') } required/>
                    { this.validator.displayValidatorErrors('password')}
                </div>
                <div className="form-item">
                    <input type="password" name="password_confirm" className="form-control" placeholder="Powtórz hasło!"
                    value={ this.state.userInfo.password_confirm } onChange={ event => this.handleInputChange(event, 'password_confirm') } required/>
                    { this.validator.displayValidatorErrors('password_confirm')}
                </div>
                <div className="form-item">
                <button type="submit" className={`btn btn-block btn-primary`} onClick={ this.handleSubmit }>Zarejestruj się!</button>
                </div>
            </form>
        );
    }
}

class SocialSignup extends Component {
    render() {
        return (
            <div className="social-signup">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" />
                </a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={facebookLogo} alt="Facebook" />
                </a>
            </div>
        )
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
            <div className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Zarejestruj się, aby w pełni korzystać z naszego serwisu!</h1>
                    <SignupForm {...this.props}/>
                    <span className="signup-link">Masz już konto?
                        <Link to="/login">Zaloguj się!</Link>
                    </span>
                    <div className="or-separator">
                        <span className="or-text">lub skorzystaj z logowania przez:</span>
                    </div>
                    <div className="social-buttons">
                        <SocialSignup/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup