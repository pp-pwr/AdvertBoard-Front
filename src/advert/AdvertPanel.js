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
            <table className="advert-panel">
                <tbody>
                    <td width="25%"><CategoryList height="100%" top="0" /></td>
                    <td width="50%"><AdvertGrid /></td>
                </tbody>
            </table>
        )
    }
}

export default AdvertPanel