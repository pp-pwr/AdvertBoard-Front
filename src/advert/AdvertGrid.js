import React, { Component } from 'react'
import { getAdvertsByCategory } from '../utils/APIUtils'
import Alert from 'react-s-alert'
import AdvertTile from './AdvertTile'

import './Advert.css'
import '../common/Pagination.scss'

export function updateContent(category, currentTitleFilter="", page=0) {
    if(category !== null) {
        const advertsRequest = {
            "categoryId": category,
            "titleContains": currentTitleFilter,
            "page": page,
            "limit": 10
        }
        getAdvertsByCategory(advertsRequest)
        .then(response => {
            console.log(response['content'])
            this.setState({
                items: response['content'],
                pageCount: response['totalPages'],
                currentCategory: category,
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
    updateContent(this.state.currentCategory, this.state.currentTitleFilter, page)
}

class AdvertGrid extends Component {
    constructor() {
        super()
        
        this.state = {
            loading: false,
            items: [],
            currentCategory: null,
            currentPage: 0,
            pageCount: 0,
            currentTitleFilter: ""
        }

        // eslint-disable-next-line no-func-assign
        updateContent = updateContent.bind(this)

        // eslint-disable-next-line no-func-assign
        updatePage = updatePage.bind(this)
    }

    componentDidMount() {
        updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage)
        setInterval(() => {
            updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage)
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