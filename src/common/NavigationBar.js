import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">AdvertBoard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    { this.props.authenticated ? (
                            <div>
                                <Nav.Link href="/profile">Mój profil</Nav.Link>
                                <button onClick={ this.props.onLogout } value="Wyloguj się!">Wyloguj się</button>
                            </div>
                            ) : (
                            <div>
                                <Nav.Link href="/login">Logowanie</Nav.Link>
                                <Nav.Link href="/signup">Rejestracja</Nav.Link>                            </div>
                            )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar