import React, { Component } from 'react'
import { getCategories } from '../utils/APIUtils'
import LoadingIndicator from '../common/LoadingIndicator'
import ListGroup from 'react-bootstrap/ListGroup'

import './Advert.css'

class CategoryList extends Component {
    constructor() {
        super()

        this.state = {
            categoryList: [],
            current: null,
            loading: false
        }

        this.loadCategories = this.loadCategories.bind(this)
    }

    loadCategories() {
        this.setState({
            loading: true
        })

        getCategories()
            .then(response => {
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

    componentDidMount() {
        this.loadCategories();
    }

    createList = () => {
        let categoryList = [];
        for (let i = 0; i < this.state.categoryList.length; i++) {
            let category = this.state.categoryList[i]
            let currentSubcategories = category['subCategories']
            let subcategoryList = []
            for (let j = 0; j < currentSubcategories.length; j++) {
                subcategoryList.push(<ListGroup.Item action> { currentSubcategories[j]['subcategoryName'] }</ListGroup.Item>)
            }
          
            categoryList.push(
                <ListGroup.Item action > {category['categoryName'] }
                    {subcategoryList}
                </ListGroup.Item>
                )
        }
        return categoryList
      }

    render() {
        if (this.state.loading) {
             return <LoadingIndicator />
        }
        return (
            <ListGroup className="category-list" height="100%" data-toggle="collapse">
                { this.createList() }
            </ListGroup>
        )
    }
}

export default CategoryList;