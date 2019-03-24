import React, { Component } from 'react'
import CategoryList from './CategoryList'
import AdvertGrid from './AdvertGrid'

import './Advert.css'

class AdvertPanel extends Component {
    render() {
        return (
            <table>
                <td className="advert-panel">
                    <td width="25%"><CategoryList /></td>
                    <td width="75%"><AdvertGrid /></td>
                </td>
            </table>
        )
    }
}

export default AdvertPanel