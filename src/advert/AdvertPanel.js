import React, { Component } from 'react'
import CategoryList from './categories/CategoryList'
import AdvertGrid from './grid/AdvertGrid'
import styled from 'styled-components';
import LoadingIndicator from '../common/LoadingIndicator'
import Alert from 'react-s-alert';

import { getAdvertsByCategory } from '../utils/APIUtils'

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

const ContentGrid = styled.div`
    display: flex;
    align-items: center;
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
                pageLimit: 10,
                sorting: [],
                advertList: []
            },
            mounted: false,
            loading: true
        }

        this.categoryChange = this.categoryChange.bind(this)
        this.titleChange = this.titleChange.bind(this);
        this.sortChange = this.sortChange.bind(this);
        this.detailsChange = this.detailsChange.bind(this);
        this.pageChange = this.pageChange.bind(this);

        this.loadAdverts = this.loadAdverts.bind(this);
    }

    componentDidMount() {
        this.setState({
            mounted: true
        }, () => {
            this.loadAdverts()
        })
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    loadAdverts() {
        if(!this.state.mounted) {
            return
        }

        let sortingCriteriaString = ""

        this.state.advertGrid.sorting.forEach(function(sortOption) {
            sortingCriteriaString += ("&sort=" + sortOption)
        })

        const advertRequest = {
            "categoryId": this.state.advertGrid.currentCategoryID,
            "titleContains": this.state.advertGrid.currentTitleFilter,
            "page": this.state.advertGrid.currentPage,
            "limit": this.state.advertGrid.pageLimit,
            "sorting": sortingCriteriaString
        }

        getAdvertsByCategory(advertRequest)
        .then(response => {
            this.setState({
                advertGrid: {
                    ...this.state.advertGrid,
                    pageCount: response['totalPages'],
                    advertList: response['content']
                },
                loading: false
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })

        console.log("Sent request.")
        console.log(advertRequest)
    }

    categoryChange(event) {
        console.log("CATEGORY CHANGE")
        this.loadAdverts()
    }

    titleChange(titleFilter) {
        this.setState({
            advertGrid: {
                ...this.state.advertGrid,
                currentTitleFilter: titleFilter 
            }
        }, () => {
            console.log("New title: " + titleFilter)
            this.loadAdverts()
        })
    }

    sortChange(sortInfo) {
        this.setState({
            advertGrid: {
                ...this.state.advertGrid,
                sorting: sortInfo
            }
        }, () => {
            console.log("New sort options: " + sortInfo)
            this.loadAdverts()
        })
    }

    detailsChange(event) {
        console.log("DETAILS CHANGE")
        this.loadAdverts()
    }

    pageChange(newPage) {
        this.setState({
            advertGrid: {
                ...this.state.advertGrid,
                currentPage: newPage
            }
        }, () => {
            console.log("New page number: " + newPage)
            this.loadAdverts()
        })
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
                    { this.state.loading ? (
                        <LoadingIndicator />
                    ) : (
                        <ContentGrid>
                            <AdvertGrid itemList={this.state.advertGrid.advertList}/>
                            <PageSelectionPanel pages={this.state.advertGrid.currentPage} changeHandler={this.pageChange}/>
                        </ContentGrid>
                    )}
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