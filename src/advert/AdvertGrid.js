import React, { Component } from 'react'
import { getAdverts, getAdvertsByCategory, getAdvertsBySubcategory } from '../utils/APIUtils'
import Alert from 'react-s-alert'

import './Advert.css'
import '../common/Pagination.scss'

import bike from '../assets/images/bike.jpg'

class AdvertTile extends Component {
    constructor(props) {
        super()
        this.advert = props.advert
    }

    render() {
        return (
            <div className="advert-tile-info">
                <div className="advert-tile-body">
                    <img src={bike} alt="Ad" className="advert-photo"></img>
                </div>
                <div className="advert-tile-body">
                    <div className="advert-details">
                        <p className="advert-name"> { this.advert.title } </p>
                        {/* <p className="advert-category"> { this.advert.category } / {this.advert.subcategory }</p> */}
                    </div>
                    <div className="advert-details-2">
                        { this.advert.price !== null ? (
                            <p className="advert-price"> { this.advert.price } </p>
                        ) : (
                            <div></div>
                        )}
                        <p className="advert-date"> { this.advert.date } </p>
                    </div>
                </div>
            </div>
        )
    }
}

export function updateContent(category, subcategory, page) {
    if(category === null && subcategory === null) {
        const advertsRequest = {
            "page": page,
            "limit": 16
        }
        getAdverts(advertsRequest)
        .then(response => {
            this.setState({
                items: response['content'],
                pageCount: response['totalPages'],
                currentCategory: category,
                currentSubcategory: subcategory,
                currentPage: page
            })
        }).catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    } else if (subcategory === null & category !== null) {
        const advertsByCategoryRequest = {
            "categoryName": category,
            "page": page,
            "limit": 16
        }
        getAdvertsByCategory(advertsByCategoryRequest)
        .then(response => {
            this.setState({
                items: response['content'],
                pageCount: response['totalPages'],
                currentCategory: category,
                currentSubcategory: subcategory,
                currentPage: page
            })
        }).catch(error => {
            Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
        })
    } else {
        const advertsBySubcategoryRequest = {
            "name": subcategory,
            "page": page,
            "limit": 16
        }
        getAdvertsBySubcategory(advertsBySubcategoryRequest)
        .then(response => {
            this.setState({
                items: response['content'],
                pageCount: response['totalPages'],
                currentCategory: category,
                currentSubcategory: subcategory,
                currentPage: page
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
    updateContent(this.state.currentCategory, this.state.currentSubcategory, page)
}

class AdvertGrid extends Component {
    constructor() {
        super()
        
        this.state = {
            loading: false,
            items: [],
            currentCategory: null,
            currentSubcategory: null,
            currentPage: 0,
            pageCount: 0
        }

        // eslint-disable-next-line no-func-assign
        updateContent = updateContent.bind(this)

        // eslint-disable-next-line no-func-assign
        updatePage = updatePage.bind(this)
    }

    componentDidMount() {
        updateContent(this.state.currentCategory, this.state.currentSubcategory, this.state.currentPage)
        setInterval(() => {
            updateContent(this.state.currentCategory, this.state.currentSubcategory, this.state.currentPage)
        }, 10000)
    }

    render() {
        return (
            <div className="advert-content-box">
                <div className="advert-flexbox">
                    {this.state.items.map(item =>
                        <AdvertTile className="advert-flexbox-item" key={ item.name } advert={ item } />)}
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
                <li className='page-numbers'>
                    <button onClick={() => this.setPage(i)}>{ i + 1}</button>
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
                        <li className='left page-numbers'>
                            <button onClick={() => this.setPage(this.state.currentPage - 1)}>Poprzednia</button>
                        </li>
                        { this.createButtons() }
                        <li className='right page-numbers'>
                            <button onClick={() => this.setPage(this.state.currentPage + 1)}>Następna</button>
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