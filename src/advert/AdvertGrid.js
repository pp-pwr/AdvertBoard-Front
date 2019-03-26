import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getAdverts, getAdvertsByCategory, getAdvertsBySubcategory } from '../utils/APIUtils'
import Alert from 'react-s-alert'

import './Advert.css'
import '../common/Pagination.scss'

import bike from '../assets/images/bike.jpg'

class AdvertTile extends Component {
    handleAdvertClick = () => {
        this.props.history.push({
            pathname: '/advert',
            state: { detail: this.props.advert }
        })
    }

    render() {
        this.advert = this.props.advert
        console.log(this.props)
        return (
            <div className="advert-tile-info">
                <div className="advert-tile-body">
                    { this.advert.base64 ? (
                        <img src={ 'data:image/png;base64,' + this.advert.base64.substring(22)} alt="Ad" className="advert-photo"></img>
                    ) : (
                        <img src={bike} alt="Ad" className="advert-photo"></img>
                    )}
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
                        <Link className="" to={{
                            pathname: '/advert',
                            state: { details: this.props.advert}
                        }}> Szczegóły ogłoszenia </Link>
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
            "name": category,
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