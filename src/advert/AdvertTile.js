import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Advert.css'

import bike from '../assets/images/bike.jpg'

class AdvertTile extends Component {
    handleAdvertClick = () => {
        this.props.history.push({
            pathname: '/advert',
            state: { detail: this.props.advert }
        })
    }

    render() {
        this.advert = this.props.advert
        console.log(this.props)
        return (
            <div className="advert-tile-info">
                <div className="advert-tile-body">
                    { this.advert.pic ? (
                        <img src={ 'data:image/png;base64,' + this.advert.pic.substring(22)} alt="Ad" className="advert-photo"></img>
                    ) : (
                        <img src={bike} alt="Ad" className="advert-photo"></img>
                    )}
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
            </div>
        )
    }
}

export default AdvertTile