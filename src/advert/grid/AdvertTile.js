import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAdvertImageURL } from '../../utils/APIUtils'
import '../Advert.css'
import bike from '../../assets/images/bike.jpg'

import styled from 'styled-components';

const Tile = styled.div`
    flex-grow: 1;
    background: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.27);
    overflow: auto;
    border-radius:3px;
`;

var recommended = {
    "border-style": "solid",
    "border-width": "2px",
    "border-color": "gold"
}

var normal = {

}

class AdvertTile extends Component {
    render() {
        this.advert = this.props.advert
        return (
            <Tile style={this.advert.recommended ? recommended : normal}>
                <div className="advert-tile-body">
                    <img src={getAdvertImageURL(this.advert.id)} alt="Ad" className="advert-photo"></img>
                </div>
                <div className="advert-tile-body">
                    <div className="advert-details">
                        <p className="advert-name"> { this.advert.title } </p>
                        {/* <p className="advert-category"> { this.advert.category } / {this.advert.subcategory }</p> */}
                    </div>
                    <div className="advert-details-2">
                        { this.advert.price !== null ? (
                            <p className="advert-price"> { this.advert.price } </p>
                        ) : (
                            <div></div>
                        )}
                        <p className="advert-date"> { this.advert.date } </p>
                        <Link className="" to={{
                            pathname: '/advert/' + this.advert.id,
                        }}> Szczegóły ogłoszenia </Link>
                    </div>
                </div>
            </Tile>
        )
    }
}

export default AdvertTile