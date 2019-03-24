import React, { Component } from 'react'
import { getCategories, getAdverts, getAdvertsByCategory, getAdvertsBySubcategory } from '../utils/APIUtils'
import LoadingIndicator from '../common/LoadingIndicator'
import ListGroup from 'react-bootstrap/ListGroup'
import { updateContent } from './AdvertGrid';
import Alert from 'react-s-alert'

import './Advert.css'

class CategoryList extends Component {

    _isMounted = false

    constructor() {
        super()

        this.state = {
            categoryList: [],  
            currentCategory: null,
            currentSubcategory: null,
            loading: false
        }

        this.loadCategories = this.loadCategories.bind(this)
    }

    componentDidMount() {
        this._isMounted = true
        this.loadCategories()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    loadCategories() {
        if(this._isMounted) {
            this.setState({
                loading: true
            })

            getCategories()
                .then(response => {
                    console.log(response)
                    this.setState({
                        categoryList: response,
                        loading: false
                    })
                }).catch(error => {
                    this.setState({
                        loading: false
                    })
                })
        }
    }

    createList = () => {
        let categoryList = [];

        categoryList.push(
            <ListGroup.Item width="100%" action
                onClick={ () => this.filterResults(null, null) }
                key="all">
                Wszystkie
            </ListGroup.Item>
        )

        for (let i = 0; i < this.state.categoryList.length; i++) {
            let category = this.state.categoryList[i]
            let currentSubcategories = category['subCategories']
            let subcategoryList = []
            
            subcategoryList.push(
                <ListGroup.Item width="100%" action
                        onClick={() => this.filterResults(category['categoryName'], null)}
                        key= {i + '_all'}>
                    Wszystkie
                </ListGroup.Item>
            )

            for (let j = 0; j < currentSubcategories.length; j++) {
                let subcategory = currentSubcategories[j]
                subcategoryList.push(
                <ListGroup.Item action width="100%"
                        onClick={() => this.filterResults(category['categoryName'], subcategory['subcategoryName'])}
                        key={ i + "_" + j}> 
                    { subcategory['subcategoryName'] }    
                </ListGroup.Item>)
            }
          
            categoryList.push(
                <p width="100%" key={ i }>
                    {category['categoryName']}
                    {subcategoryList}
                </p>
                )
        }
        return categoryList
    }

    filterResults = (category, subcategory) => {
        if(this._isMounted) {
            this.setState({
                currentCategory: category,
                currentSubcategory: subcategory
            })

            updateContent(category, subcategory, 0)
        }
    }

    render() {
        if (this.state.loading) {
             return <LoadingIndicator />
        }
        return (
            <ListGroup>
                { this.createList() }
            </ListGroup>
        )
    }
}

export default CategoryList;