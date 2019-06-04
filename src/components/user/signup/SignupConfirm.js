import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getUrlParameter } from "../../../utils/UrlParameter"
import { confirmEmail } from "../../../utils/APIUtils"
import Alert from "react-s-alert"

class SignupConfirm extends Component {
    render() {
        const confirmToken = getUrlParameter('token', this.props.location)
        let dest = '/signup'

        if(confirmToken) {

            confirmEmail(confirmToken)
            .then(response => {
                Alert.success("Pomyślnie zweryfikowałeś swój adres email!")
                dest = '/login'
            })
        }

        return (
            <Redirect to={{
                pathname: dest,
                state: {
                    from: this.props.location
                }
            }} />
        )
    }
}

export default SignupConfirm;