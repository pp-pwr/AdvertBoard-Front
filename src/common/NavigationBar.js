import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"

import "./NavigationBar.css"

class NavigationBar extends Component {
    render() {
        return (
            <header className="app-navigation-bar">
                <div className="container">
                    <div className="app-main-page">
                        <Link to="/" className="app-title">AdvertBoard</Link>
                    </div>
                    <div className="app-navigation-elements">
                        <nav className="app-navigation-buttons">
                            { this.props.authenticated ? (
                                <ul>
                                    <li><NavLink to="/profile">Mój profil</NavLink></li>
                                    <li><button onClick={ this.props.onLogout }>Wyloguj się</button></li>
                                </ul>
                            ) : (
                                <ul>
                                    <li><NavLink to="/login">Logowanie</NavLink></li>
                                    <li><NavLink to="/signup">Rejestracja</NavLink></li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default NavigationBar