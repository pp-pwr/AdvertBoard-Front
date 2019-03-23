import React, { Component } from 'react'
import './Advert.css'

import bike from '../assets/images/bike.jpg'

class AdvertTile extends Component {
    constructor(props) {
        super()
        this.advert = props.advert
    }

    render() {
        return (
            <div className="advert-tile-info">
                <div className="advert-tile-body">
                    <img src={bike} alt="Ad" className="advert-photo"></img>
                </div>
                <div className="advert-tile-body">
                    <div className="advert-details">
                        <p className="advert-name"> { this.advert.name } </p>
                        <p className="advert-category"> { this.advert.category } / {this.advert.subcategory }</p>
                    </div>
                    <div className="advert-details-2">
                        { this.advert.price !== null ? (
                            <p className="advert-price"> { this.advert.price } </p>
                        ) : (
                            <div></div>
                        )}
                        <p className="advert-date"> { this.advert.date } </p>
                    </div>
                </div>
            </div>
        )
    }
}

class AdvertGrid extends Component {
    constructor() {
        super()
        this.advert = {
            name: "Test",
            category: "Other",
            subcategory: "Other",
            price: "111",
            date: "12/12/2010"
        }
    }

    render() {
        return (
            <div>
                <br/><br/><br/>
            <AdvertTile advert={ this.advert } />
            </div>
        )
    }
}

export default AdvertGrid;