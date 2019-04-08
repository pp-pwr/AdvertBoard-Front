import React, { Component } from "react"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">AdvertBoard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {/* Tutaj będzie można wstawić jakiś avatar usera czy cos */}
                <Navbar.Collapse className="justify-content-start" id="basic-navbar-nav">
                    { this.props.authenticated ? (
                        <Nav>
                          <Navbar.Text className="justify-content-start">Zalogowany jako { this.props.user.name }</Navbar.Text>
                        </Nav>
                        ) : (<p></p>)}
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/profile/search">Wyszukaj użytkownika</Nav.Link>
                    </Nav>
                    { this.props.authenticated ? (
                        <Nav>
                            <Nav.Link href="/add" advert_id={null}>Dodaj ogłoszenie</Nav.Link>
                            <Nav.Link href="/profile/me">Mój profil</Nav.Link>
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