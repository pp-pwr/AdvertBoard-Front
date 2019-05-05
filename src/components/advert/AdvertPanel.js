import React, { Component } from 'react'
import CategoryList from '../category/CategoryList'
import AdvertGrid from './grid/AdvertGrid'
import AdvertSlider from "./grid/AdvertSlick"
import styled from 'styled-components';
import LoadingIndicator from '../../common/LoadingIndicator'
import Alert from 'react-s-alert';

import { getAdvertsByCategory, getRecommendedAdverts } from '../../utils/APIUtils'

import {SortPanel, SearchBoxPanel, PageSelectionPanel} from './filters'


import './Advert.css'

const Panel = styled.div`
    display: flex;
    align-items: flex-start;
    flex-grow: 1;
`;

const Details = styled.div`
    display: flex-inline;
    max-width: 25vw;
    text-align: center;
    margin-right: 1vw;
`;

const Adverts = styled.div`
    text-align: center;
    width: 100%;
    flex-grow: 1;
`;

const ContentGrid = styled.div`
    display: flex-inline;
    align-items: center;
    text-align: center;
`;

const RecommendedAdverts = styled.div`
    width: 70vw;
    padding: 0vw 2vh 2vw 2vh;
    
    margin-left: auto;
    margin-right: auto;

    & > .recommended-slider {
        text-align: center;
    }
`

class AdvertPanel extends Component {

    constructor(props) {
        super(props)

        this.state = {
            advertGrid: {
                currentCategoryID: 0,
                currentCategory: null,
                currentPage: 0,
                pageCount: 0,
                currentTitleFilter: "",
                pageLimit: 10,
                sorting: [],
                advertList: [],
                recommendedAdverts: []
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
        this.loadRecommendedAdverts = this.loadRecommendedAdverts.bind(this);
    }

    componentDidMount() {
        this.setState({
            mounted: true
        }, () => {
            this.loadAdverts();
            this.loadRecommendedAdverts();
        })
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    loadRecommendedAdverts() {
        if(!this.state.mounted) {
            return
        }

        const requestSize = 10;

        getRecommendedAdverts(requestSize)
        .then(response => {
            this.setState({
                advertGrid: {
                    ...this.state.advertGrid,
                    recommendedAdverts: response
                }
            })
        })
        .catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
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

    categoryChange(categoryID, category) {
        this.setState({
            advertGrid: {
                ...this.state.advertGrid,
                currentCategoryID: categoryID,
                currentCategory: category
            }
        }, () => {
            console.log("New category ID: " + categoryID)
            console.log(category)
            this.loadAdverts()
        
        })
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
                            <RecommendedAdverts>
                                <AdvertSlider itemList={this.state.advertGrid.recommendedAdverts} />
                            </RecommendedAdverts>
                            <AdvertGrid itemList={this.state.advertGrid.advertList}/>
                            <PageSelectionPanel pages={this.state.advertGrid.pageCount} changeHandler={this.pageChange}/>
                        </ContentGrid>
                    )}
                </Adverts>
                <Details>
                    <SortPanel changeHandler={this.sortChange} sortingState={this.state.advertGrid.sorting} />
                    {/* { this.state.advertGrid.currentCategory !== null 
                    && typeof this.state.advertGrid.currentCategory.infoList !== "undefined" ? (
                        <AdvertDetailsPanel changeHandler={this.detailsChange} details={this.state.advertGrid.currentCategory.infoList} />
                    ) : (
                        <div></div>
                    )} */}
                </Details>
            </Panel>
        )
    }
}

export default AdvertPanel