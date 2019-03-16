import React, { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">AdvertBoard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                { this.props.authenticated ? (
                    <Navbar.Text>Zalogowany jako { this.props.user.name }</Navbar.Text>
                ) : (<p></p>)}
                
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    { this.props.authenticated ? (
                        <Nav>
                            <Nav.Link href="/profile">Mój profil</Nav.Link>
                            <Nav.Link title="logout" onClick={ this.props.onLogout }>Wyloguj się</Nav.Link>
                        </Nav>
                        ) : (
                        <Nav>
                            <Nav.Link href="/login">Logowanie</Nav.Link>
                            <Nav.Link href="/signup">Rejestracja</Nav.Link>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar