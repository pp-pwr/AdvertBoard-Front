import React, { Component } from 'react'
import { getAdvertsByCategory } from '../../utils/APIUtils'
import Alert from 'react-s-alert'
import AdvertTile from './AdvertTile'

import '../Advert.css'
import '../../common/Pagination.scss'

export function updateContent(category, currentTitleFilter=this.state.currentTitleFilter, page=this.state.currentTitleFilter, sorting=this.state.sorting) {
    if(category !== null) {
        let sortingCriteria = ""
        for(let i = 0; i < sorting.length; i++) {
            sortingCriteria += ("&sort=" + sorting[i])
        }

        const advertsRequest = {
            "categoryId": category,
            "titleContains": currentTitleFilter,
            "page": page,
            "limit": 10,
            "sorting": sortingCriteria
        }
        getAdvertsByCategory(advertsRequest)
        .then(response => {
            this.setState({
                items: response['content'],
                pageCount: response['totalPages'],
                currentCategory: category,
                currentPage: page,
                sorting: sorting
            })
        }).catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    }
}

export function updatePage(page) {
    this.setState({
        items: []
    })
    updateContent(this.state.currentCategory, this.state.currentTitleFilter, page, this.state.sorting)
}

class AdvertGrid extends Component {
    constructor() {
        super()
        
        this.state = {
            loading: false,
            items: [],
            mounted: false
        }
        this.advertDetails = null;

        // eslint-disable-next-line no-func-assign
        updateContent = updateContent.bind(this)

        // eslint-disable-next-line no-func-assign
        updatePage = updatePage.bind(this)
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })

        this.advertDetails = this.props.advertDetails;

        // updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage, this.state.sorting)
        // setInterval(() => {
        //     updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage, this.state.sorting)
        // }, 10000)
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputValue = target.value;

        this.filter = inputValue
        this.filterData()
    }

    filterData = () => {
        this.setState({
            currentTitleFilter: this.filter
        })
        updateContent(this.state.currentCategory, this.filter, this.state.currentPage, this.state.sorting)
    }

    render() {
        return (
            <div className="advert-content-box">
                <div className="advert-flexbox">
                    {this.state.items.map(item =>
                        <AdvertTile key={ "tile_ " + item.id } className="advert-flexbox-item" advert={ item } />)}
                </div>
            </div>
        )
    }
}

export default AdvertGrid;