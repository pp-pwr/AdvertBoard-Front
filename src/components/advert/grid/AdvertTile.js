import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getAdvertImageURL } from '../../../utils/APIUtils'
import { getColorFromImgElement } from '../../../utils/ColorUtils'

import '../Advert.css'
import bike from '../../../assets/images/bike.jpg'

import styled from 'styled-components';

const Tile = styled.div`
    background: #fff;
    overflow: auto;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0vw 0vh 0.2vw 0vh;
    border-radius: 10px;
    margin: 1vw 2vh 1vw 2vh;
    text-align:center;
    position: relative;

    --webkit-transition: 
        transform 250ms,
        filter 300ms;

    transition: 
        transform 250ms,
        filter 300ms;

    &:hover {
        z-index: 9999;
        transform: scale(1.05, 1.05);
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
    text-align: center;
    overflow: hidden;

    & > img {
        display: block;
        overflow: hidden;
        margin: auto;
    }
`

const TileInfo = styled.div`
    background-color: #007bff;
    opacity: 0.6;
    position: relative;
    color: white;
    width: 100%;
    height: 150%;
    overflow: hidden;
    margin-bottom: -5px;

    &::before {
        position: absolute;
        content: "";
        width: 100%;
        transform: translateX(-50%);
        background-color: white;
        height: 15px;
        border-right: -2px solid #007bff;
        border-bottom: 2px solid #007bff;
        border-bottom-right-radius: 15px;
        border-left: -2px solid #007bff;
        border-bottom-left-radius: 15px;
    }
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
                    <img src={getAdvertImageURL(this.advert.id)} alt="Ad" className="advert-photo" id={'advert_' + this.advert.id}></img>
                </TileImage>
                <TileInfo>
                    <TileTitle>
                            <p>{ this.advert.title }</p>
                    </TileTitle>
                    <TileDetails>
                        {/* <p className="advert-price"> { this.advert.price }500zł </p> */}
                        <p className="advert-date">Dodano: { this.advert.date } </p>
                    </TileDetails>
                </TileInfo>
            </Tile>
        )
    }
}

export default AdvertTile