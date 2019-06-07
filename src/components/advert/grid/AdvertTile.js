import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { getAdvertImageURL } from '../../../utils/APIUtils'
import { getColorFromImgElement } from '../../../utils/ColorUtils'

import '../Advert.css'
import bike from '../../../assets/images/bike.jpg'

import styled from 'styled-components';

const Tile = styled.div`
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding: 0vw 0vh 0.2vw 0vh;
    border-radius: 10px;
    text-align:center;
    position: relative;
    width: 100%;
    height: 100%;

    transform: scale(${props => props.gap ? '0.9': '1.0'}, ${props => props.gap ? '0.9': '1.0'});

    margin: ${props => props.gap ? '' + props.gap : '0'};

    --webkit-transition: 
        transform 250ms,
        filter 300ms;

    transition: 
        transform 250ms,
        filter 300ms;

    &:hover {
        z-index: 9999;
        transform: scale(${props => props.gap ? '0.95': '1.05'}, ${props => props.gap ? '0.95': '1.05'});
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

    height: calc(1.5vh + 3.2em)
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
    text-align: center;
    position: relative;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 15vw;
        display: block;
        object-fit: cover;
        margin: auto;
    }
`

const TileInfo = styled.div`
    // background-color: #007bff;
    background-color: lightgrey;
    // color: white;
    color: black;
    opacity: 0.9;
    width: 100%;
    overflow: hidden;
    margin-bottom: -5px;
    border-radius: 0px 0px 10px 10px;
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
            <Tile gap={this.props.gap} style={this.advert.recommended ? recommended : normal} onClick={this.handleTileClick.bind(this)}>
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