import React, { Component } from 'react'
import CategoryList from './categories/CategoryList'
import AdvertGrid from './grid/AdvertGrid'
import styled from 'styled-components';

// import SortPanel from './filters/SortPanel'
// import SearchBoxPanel from './filters/SearchBoxPanel'
// import PageSelectionPanel from './filters/PageSelectionPanel'
import {SortPanel, SearchBoxPanel, PageSelectionPanel, AdvertDetailsPanel} from './filters'


import './Advert.css'

const Panel = styled.div`
    display: flex-inline;
    align-items: center;
`;

const Details = styled.div`
    display: block;
`;

const Adverts = styled.div`
    border: solid;
`;

class AdvertPanel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            advertGrid: {
                currentCategoryID: 0,
                currentPage: 0,
                pageCount: 0,
                currentTitleFilter: "",
                sorting: []
            },
            mounted: false
        }

        this.categoryChange = this.categoryChange.bind(this)
        this.titleChange = this.titleChange.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
        this.pageChange = this.pageChange.bind(this);
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

    categoryChange(event) {
        console.log("CATEGORY CHANGE")
    }

    titleChange(titleFilter) {
        this.setState({
            advertGrid: {
                ...this.state.advertGrid,
                currentTitleFilter: titleFilter 
            }
        })
        console.log("New Title:E " + titleFilter)
    }

    sortChange(sortInfo) {
        this.setState({
            advertGrid: {
                ...this.state.advertGrid,
                sorting: sortInfo
            }
        })
        console.log("New sort options: " + sortInfo)
    }

    detailsChange(event) {
        console.log("DETAILS CHANGE")
    }

    pageChange(event) {
        console.log("PAGE CHANGE")
    }

    render() {
        if(!this.state.mounted) {
            return null
        }
        
        return (
            <Panel>
                <CategoryList changeHandler={this.categoryChange}/>
                <Adverts>
                    <SearchBoxPanel changeHandler={this.titleChange}/>
                    <AdvertGrid advertOptions={this.state.advertGrid}/>
                    <PageSelectionPanel pages={this.state.advertGrid.pageCount} changeHandler={this.pageChange}/>
                </Adverts>
                <Details>
                    <SortPanel changeHandler={this.sortChange} sortingState={this.state.advertGrid.sorting} />
                    <AdvertDetailsPanel changeHandler={this.detailsChange} />
                </Details>
            </Panel>
        )
    }
}

export default AdvertPanel