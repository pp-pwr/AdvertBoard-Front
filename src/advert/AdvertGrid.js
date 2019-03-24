import React, { Component } from 'react'
import Pagination from '../utils/Pagination'

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
        
        let advert = this.createList()
        console.log(advert)
        this.state = {
            items: advert,
            pageOfItems: []
        }

        this.onPageChange = this.onPageChange.bind(this)
        this.createList = this.createList.bind(this)
    }

    createList() {
        const advert = []
        for(let i = 0; i < 323; i++) {
            advert.push(
                {
                    name: "Test_" + i,
                    category: "Other",
                    subcategory: "Other",
                    price: "111",
                    date: "12/12/2010"
                    }
            )
        }
        return advert
    }

    onPageChange(pageOfItems) {
        this.setState({
            pageOfItems: pageOfItems
        })
    }

    render() {
        return (
            <div className="advert-content-box">
                <div className="advert-flexbox">
                    { this.state.pageOfItems.map(item =>
                        <AdvertTile className="advert-flexbox-item" key={ item.name } advert={ item } />
                    )}
                </div>
                <div className="footer">
                    <Pagination items={ this.state.items } onChangePage={ this.onPageChange } />
                </div>
            </div>
        )
    }
}

export default AdvertGrid;