import React, { Component } from 'react'
import styled from 'styled-components'

const PanelFragment = styled.div`
    width: 100%;
    display: block;
    text-align: center;

    & > span > h1, p {
        margin-left: 2vh;
    }
`

class UserAuthorization extends Component {
    render() {
        return (
            <PanelFragment>
                <span className="reported-adverts">
                    <h1 className="title-text">Zgłoszenia</h1>
                    <p>1</p>
                </span>
            </PanelFragment>
        )
    }
}

export default UserAuthorization