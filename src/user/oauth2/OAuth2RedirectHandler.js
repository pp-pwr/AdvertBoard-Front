import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { ACCESS_TOKEN } from "../../constants"
import { getUrlParameter } from "../../utils/UrlParameter"

class OAuth2RedirectHandler extends Component {
    render() {        
        const token = getUrlParameter('token', this.props.location);
        const error = getUrlParameter('error', this.props.location);

        if(token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            return <Redirect to={{
                pathname: "/",
                state: { from: this.props.location }
            }}/>; 
        } else {
            return <Redirect to={{
                pathname: "/login",
                state: { 
                    from: this.props.location,
                    error: error 
                }
            }}/>; 
        }
    }
}

export default OAuth2RedirectHandler;