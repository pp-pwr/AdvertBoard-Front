import React, { Component } from 'react'
import { getAdvertsByCategory } from '../utils/APIUtils'
import Alert from 'react-s-alert'
import AdvertTile from './AdvertTile'

import './Advert.css'
import '../common/Pagination.scss'

export function updateContent(category, currentTitleFilter=this.state.currentTitleFilter, page=this.state.currentTitleFilter, sorting=this.state.sorting) {
    if(category !== null) {
        let sortingCriteria = ""
        for(let i = 0; i < sorting.length; i++) {
            sortingCriteria += sorting[i]

            if(i < sorting.length - 1)
                sortingCriteria += "&"
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
    updateContent(this.state.currentCategory, this.state.currentTitleFilter, page)
}

class AdvertGrid extends Component {
    constructor() {
        super()
        
        this.state = {
            loading: false,
            items: [],
            currentCategory: 0,
            currentPage: 0,
            pageCount: 0,
            currentTitleFilter: "",
            mounted: false,
            sorting: []
        }

        // eslint-disable-next-line no-func-assign
        updateContent = updateContent.bind(this)

        // eslint-disable-next-line no-func-assign
        updatePage = updatePage.bind(this)
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
        updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage, this.state.sorting)
        setInterval(() => {
            updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage, this.state.sorting)
        }, 10000)
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({ 
            [inputName]: inputValue
            })
    }

    filterData = () => {
        updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage)
    }

    sortData = (event) => {
        const target = event.target;
        const name = target.name;

        let sortList = this.state.sorting

        console.log(name)
        if(name.includes("title")) {
            sortList = sortList.filter((value) => {
                return value.includes('date')
            })
            if(name.includes("asc")) {
                sortList.push("title,asc")
            } else if (name.includes("desc")) {
                sortList.push("title,desc")
            }
        } else if (name.includes("date")) {
            sortList = sortList.filter((value) => {
                return value.includes('title')
            })
            if(name.includes("asc")) {
                sortList.push("date,asc")
            } else if (name.includes("desc")) {
                sortList.push("date,desc")
            }
        } else {
            sortList = []
        }

        this.setState({
            sorting: sortList
        })

        updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage, sortList)
    }

    render() {
        return (
            <div className="advert-content-box">
                <div className="sort-box" width="30px">
                    <button className="btn btn-block" name="title_desc" onClick={this.sortData}>Nazwa malejąco</button>
                    <button className="btn btn-block" name="title_asc" onClick={this.sortData}>Nazwa rosnąco</button>
                    <button className="btn btn-block" name="date_desc" onClick={this.sortData}>Data malejąco</button>
                    <button className="btn btn-block" name="date_asc" onClick={this.sortData}>Data rosnąco</button>
                    <button className="btn btn-block" name="reset" onClick={this.sortData}>Resetuj</button>
                </div>
                <div className="search-box" width="30px">
                    <input className="search-box-field" type="text" name="currentTitleFilter"
                                onChange={this.handleInputChange}/>
                    <button className="btn btn-primary" onClick={this.filterData}>Filtruj</button>
                </div>

                <div className="advert-flexbox">
                    {this.state.items.map(item =>
                        <AdvertTile key={ "tile_ " + item.id } className="advert-flexbox-item" advert={ item } />)}
                </div>
                <Pagination pages={ this.state.pageCount } />
            </div>
        )
    }
}

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 0
        }

        this.createButtons = this.createButtons.bind(this)
    }

    setPage(page) {
        if(page < 0) {
            page = 0
        }

        if(page >= this.props.pages) {
            page = this.props.pages - 1
        }

        this.setState({
            currentPage: page
        })
        updatePage(page)
    }

    createButtons() {
        let buttons = []

        for(let i = 0; i < this.props.pages; i++) {
            buttons.push(
                <li key={ "page_" + i } onClick={() => this.setPage(i)} className='page-numbers'>
                    <button>{ i + 1}</button>
                </li>
            );
        }
        return buttons
    }

    render() {
        return (
            <div>
                { this.props.pages > 0 ? (
                    <ul className="pagination">
                        <li key={ "page_prev" } onClick={() => this.setPage(this.state.currentPage - 1)} className='left page-numbers'>
                            <button>Poprzednia</button>
                        </li>
                        { this.createButtons() }
                        <li key={ "page_next" } onClick={() => this.setPage(this.state.currentPage + 1)} className='right page-numbers'>
                            <button>Następna</button>
                        </li>
                    </ul>
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}

export default AdvertGrid;