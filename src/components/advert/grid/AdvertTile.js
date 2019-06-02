import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getAdvertImageURL } from '../../../utils/APIUtils'
import '../Advert.css'
import bike from '../../../assets/images/bike.jpg'

import styled from 'styled-components';

const Tile = styled.div`
    background: #fff;
    overflow: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0vw 0vh 0.2vw 0vh;
    margin: 1vw 2vh 1vw 2vh;
    text-align:center;

    --webkit-transition: transform 250ms;
    transition: transform 250ms;

    & > img {
        width: 100%;
        height: auto;
    }

    &:hover {
        transform: scale(1.2, 1.2);
        filter: drop-shadow(16px 16px 20px rgba(0, 0, 0, 0.19));
    }

`;

const TileTitle = styled.div`
    padding-top: 1.5vh;
    padding-left: 0.5vw;
    overflow: hidden;
    font-weight: bold;
    font-size: 1.2em;
    text-align: left;
`

const TileDetails = styled.div`
    margin-right: 0px;
    & > .advert-date {
        text-align: right;
        margin-right: 0.5vw;
        font-size: 1.1em;
    }

    & > .advert-price {
        margin-right: 0px;
    }
`

const TileImage = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
`

var recommended = {
    "borderStyle": "solid",
    "borderWidth": "2px",
    "borderColor": "gold"
}

var normal = {

}

class AdvertTile extends Component {

    constructor() {
        super()

        this.state = {
            toDetails: false
        }
    }

    handleTileClick = () => {
        this.setState({
            toDetails: true
        })
    }

    render() {
        this.advert = this.props.advert

        if (this.state.toDetails === true) {
            return <Redirect to={'/advert/' + this.advert.id } push={true} />
        }
        
        return (
            <Tile style={this.advert.recommended ? recommended : normal} onClick={this.handleTileClick.bind(this)}>
                <TileImage>
                    <img src={getAdvertImageURL(this.advert.id)} alt="Ad" className="advert-photo"></img>
                </TileImage>
                <TileTitle>
                        <p>{ this.advert.title }</p>
                </TileTitle>
                <TileDetails>
                    {/* <p className="advert-price"> { this.advert.price }500zł </p> */}
                    <p className="advert-date">Dodano: { this.advert.date } </p>
                </TileDetails>
            </Tile>
        )
    }
}

export default AdvertTile