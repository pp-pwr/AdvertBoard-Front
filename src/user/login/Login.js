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
            userInfo: {
                email: '',
                password: ''
            }
        }

        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [inputName]: inputValue
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.userInfo.email.length > 0 && this.state.userInfo.password.length > 0){
            const loginRequest = Object.assign({}, this.state.userInfo)
            
            login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken)
                this.props.loadUser(true)
                this.props.history.push("/")
            }).catch(error => {
                Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
            })
        } else {
            Alert.error("Żadne z pól nie może być puste!")
        }
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="form-item">
                    <input type="text" name="email" className="form-control" placeholder="Email"
                    value={ this.state.userInfo.email } onChange={ this.handleInputChange } required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password" className="form-control" placeholder="Hasło"
                    value={ this.state.userInfo.password } onChange={ this.handleInputChange } required/>
                </div>
                <div className="form-item">
                <button type="submit" className={`btn btn-block btn-primary`} onClick={ this.handleSubmit }>Zaloguj się!</button>
                </div>
            </form>
        );
    }
}

class SocialLogin extends Component {
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

class Login extends Component {
    componentDidMount() {
        if(this.props.location.state && this.props.location.state.error) {
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
                    <LoginForm {...this.props}/>
                    <span className="signup-link">Nie masz konta?
                        <Link to="/signup">Zarejestruj się!</Link>
                    </span>
                    <div className="or-separator">
                        <span className="or-text">lub skorzystaj z logowania przez:</span>
                    </div>
                    <div className="social-buttons">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        );
    }
}

export default Login