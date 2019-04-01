import React, { Component } from 'react'
import CategoryList from './CategoryList'
import AdvertGrid from './AdvertGrid'

import './Advert.css'

class AdvertPanel extends Component {

    constructor() {
        super()

        this.state = {
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    render() {
        if(!this.state.mounted) {
            return null
        }
        
        return (
            <div className="advert-panel">
                <CategoryList width="25%"/>
                <AdvertGrid />
            </div>
        )
    }
}

export default AdvertPanel