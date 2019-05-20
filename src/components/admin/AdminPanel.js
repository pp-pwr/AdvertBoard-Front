import React, { Component } from 'react';
import styled from 'styled-components'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import ReportedAdverts from './ReportedAdverts'
import ReportedUsers from './ReportedUsers'
import UserAuthorization from './UserAuthorization'
import ReportStatistics from './ReportStatistics'

const PanelContainer = styled.div`
    padding-top: 5vh;
    width: 100%;

    & > .nav-bar {
        background: transparent;
        float: none;
        margin: 0 auto;
        display: inline-flex;
        flex: stretch;
        text-align: center;
        justify-content: space-around;
        font-size: 1.5em;
        width: 100%;
    }
`

const CustomNav = styled(Nav)`
    width: 100%;
`

const CustomNavLink = styled(Nav.Link)`
    width: 100%;
`

const PanelFragment = styled.div`
    width: 100%;
    display: block;
    text-align: center;

    & > span > h1, p {
        margin-left: 2vh;
    }
`

class AdminPanel extends Component {

    constructor() {
        super()

        this.state = {
            currentPage: "advert-reports"
        }
    
        this.changePage = this.changePage.bind(this)
    }

    changePage = (event, chosenPage) => {
        event.preventDefault();
        this.setState({
            currentPage: chosenPage
        })
    }

    renderPage() {
        switch(this.state.currentPage) {
            case "advert-reports":
                return <ReportedAdverts />
            case "user-reports":
                return <ReportedUsers />
            case "user-authorize":
                return <UserAuthorization />
            case "report-stats":
                return <ReportStatistics />
            default:
                return <ReportedAdverts />
        }
    }

    render() {
        return (
            <PanelContainer>
                <Navbar className="nav-bar">
                    <Navbar.Collapse className="justify-content-start" id="basic-navbar-nav">
                        <CustomNav>
                            <CustomNavLink onClick={e => this.changePage(e, "advert-reports")}>Zgłoszone ogłoszenia</CustomNavLink>
                            <CustomNavLink onClick={e => this.changePage(e, "user-reports")}>Zgłoszeni użytkownicy</CustomNavLink>
                            <CustomNavLink onClick={e => this.changePage(e, "user-authorize")}>Autoryzacja użytkowników</CustomNavLink>
                            <CustomNavLink onClick={e => this.changePage(e, "report-stats")}>Statystyki zgłoszeń</CustomNavLink>
                        </CustomNav>
                    </Navbar.Collapse>
                </Navbar>
                <PanelFragment>
                    {this.renderPage()}
                </PanelFragment>
            </PanelContainer>
        )
    }
}

export default AdminPanel;