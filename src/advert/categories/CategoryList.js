import React, { Component } from 'react'
import { getCategories } from '../../utils/APIUtils'
import LoadingIndicator from '../../common/LoadingIndicator'
import CategoryDropList from './CategoryChoice'

import '../Advert.css'

class CategoryList extends Component {

    constructor() {
        super()

        this.state = {
            categoryList: []
        }

        this.loadCategories = this.loadCategories.bind(this)
    }

    componentDidMount() {
        this.loadCategories()
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

    render() {
        if (this.state.loading) {
             return <LoadingIndicator />
        }
        
        return (
            <div>
                { this.state.categoryList ? (
                    <CategoryDropList 
                    categories={this.state.categoryList['subcategories']} 
                    changeHandler={this.props.changeHandler} 
                    next_level={0}/>
                ): (
                    <div>Brak kategorii</div>
                )}
            </div>
        )
    }
}

export default CategoryList;