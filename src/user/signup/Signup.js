import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Alert from "react-s-alert"

import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from "../../constants"
import { signup } from "../../utils/APIUtils"

import "./Signup.css"
import googleLogo from "../../assets/images/google-logo.png"
import facebookLogo from "../../assets/images/fb-logo.png"

class Signup extends Component {
    render() {
        return (
            <div>
                Tutaj jeszcze nic
            </div>
        );
    }
}

export default Signup