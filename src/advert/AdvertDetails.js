import React, { Component } from 'react'
import './Advert.css'

class AdvertDetails extends Component {

    render() {
        const advert = this.props.history.location.state.details
        console.log(advert)
        return (
            <div>
                <p>{'Tytuł: ' + advert.title}</p>
                <p>{'Opis: ' + advert.description}</p>
                <p>{'Data: ' + advert.date}</p>
                <p>Obrazek: 
                <img className="crop-image" src={ 'data:image/png;base64,' + advert.base64.substring(22)} alt="Ad"></img>
                </p>
            </div>
        )
    }
}

export default AdvertDetails