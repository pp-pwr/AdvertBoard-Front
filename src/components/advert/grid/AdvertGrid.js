import React, { Component } from 'react'
import AdvertTile from './AdvertTile'

import '../Advert.css'
import styled from 'styled-components'

const Grid = styled.div`
    text-align: center;
    width: 100%;

    & > .advert-container {
        width: calc(100%);
        justify-content: center;
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        grid-gap: 1em;
    }
`;


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
            <Grid>
                <div className="advert-container">
                    {this.state.advertList.map(item =>
                        <AdvertTile key={ "tile_ " + item.id } className="advert-flexbox-item" advert={ item } />)}
                </div>
            </Grid>
        )
    }
}

export default AdvertGrid;