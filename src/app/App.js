import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Alert from 'react-s-alert'

import 'react-s-alert/dist/s-alert-default.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css'
import './App.css'

import NotFound from "../common/NotFound"
import LoadingIndicator from "../common/LoadingIndicator"
import NavigationBar from "../common/NavigationBar"
import AdvertPanel from "../components/advert/AdvertPanel"
import Login from "../user/login/Login"
import Signup from "../user/signup/Signup"
import OAuth2RedirectHandler from "../user/oauth2/OAuth2RedirectHandler"
import PrivateRoute from "../common/PrivateRoute"
import AdvertDetails from "../components/advert/AdvertDetails"
import Profile from "../user/profile/profile-view/Profile"
import ProfileForm from "../user/profile/profile-forms/ProfileForm"
import NoProfile from "../common/NoProfile"
import ProfileList from "../user/profile/profile-list/ProfileList"
import AdminPanel from "../components/admin/AdminPanel"

import {ACCESS_TOKEN} from "../constants"
import {getCurrentUser} from "../utils/APIUtils"
import AdvertForm from "../components/advert/AdvertForm";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            authenticated: false,
            user: null,
            loading: false
        }

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser(showAlert = false) {
        this.setState({
            loading: true
        })

        getCurrentUser()
            .then(response => {
                this.setState({
                    authenticated: true,
                    user: response,
                    loading: false
                }, () => {
                    console.log(this.state.user)
                })
                if (showAlert)
                    Alert.success("Zostałeś zalogowany!")
            }).catch(error => {
            this.setState({
                loading: false
            })
        })

        return this.state.authenticated
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN)
        this.setState({
            authenticated: false,
            user: null
        });
        Alert.success("Zostałeś wylogowany!")
    }

    componentDidMount() {
        this.loadCurrentlyLoggedInUser()
    }

    render() {
        const childProps = {
            loadUser: this.loadCurrentlyLoggedInUser
        }

        if (this.state.loading) {
            return <LoadingIndicator/>
        }

        return (
            <div className="app">
                <div className="app-top-box">
                    <NavigationBar authenticated={this.state.authenticated} user={this.state.user}
                                   onLogout={this.handleLogout}/>
                </div>
                <div className="app-body">
                    <Switch>
                        <Route path="/login"
                               render={(props) => <Login
                                   authenticated={this.state.authenticated} {...props} {...childProps}/>}></Route>

                        <Route path="/signup"
                               render={(props) => <Signup
                                   authenticated={this.state.authenticated} {...props}/>}></Route>

                        <PrivateRoute path="/add" 
                            component={AdvertForm} user={this.state.user}></PrivateRoute>

                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>

                        <Route path="/advert/:advert_id" component={AdvertDetails}></Route>

                        <Route path="/profile/user/:user_id" user={this.state.user} component={Profile}></Route>

                        <PrivateRoute path="/profile/me" user={this.state.user} component={Profile}></PrivateRoute>

                        <PrivateRoute path="/profile/edit" user={this.state.user} component={ProfileForm}></PrivateRoute>

                        <PrivateRoute path="/admin" user={this.state.user} component={AdminPanel}></PrivateRoute>

                        <Route path="/profile/search" component={ProfileList} history={this.props.history}></Route>

                        <Route path="/error/noprofile" component={NoProfile}></Route>

                        <Route exact path="/" show_recommended={this.state.authenticated} component={AdvertPanel}></Route>

                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
                <Alert stack={{limit: 3}}
                       timeout={3000}
                       position='top-right' effect='slide' offset={65}/>
            </div>
        );
    }
}

export default App;
