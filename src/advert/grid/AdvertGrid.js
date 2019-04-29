import React, { Component } from 'react'
import AdvertTile from './AdvertTile'

import '../Advert.css'

class AdvertGrid extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            advertList: []
        }
    }

    componentDidMount() {
        this.setState({
            advertList: this.props.itemList
        })
    }

    componentWillReceiveProps(props) {
        if (props.itemList !== this.state.itemList) {
            this.setState({
                advertList: props.itemList
            })
        }
    }

    render() {
        return (
            <div className="advert-content-box">
                <div className="advert-flexbox">
                    {this.state.advertList.map(item =>
                        <AdvertTile key={ "tile_ " + item.id } className="advert-flexbox-item" advert={ item } />)}
                </div>
            </div>
        )
    }
}

export default AdvertGrid;