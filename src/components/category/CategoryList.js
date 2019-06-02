import React, { Component } from 'react'
import { getCategories } from '../../utils/APIUtils'
import LoadingIndicator from '../../common/LoadingIndicator'
import CategoryDropList from './CategoryChoice'

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

    prepareCatList() {
        let categories = []

        if(!this.state.categoryList['subcategories'])
            return [this.state.categoryList]

        categories.push(
            this.state.categoryList
        )

        for(let i = 0 ; i < this.state.categoryList['subcategories'].length; i++) {
            categories.push(
                this.state.categoryList['subcategories'][i]
            )
        }

        return categories
    }

    render() {
        if (this.state.loading) {
             return <LoadingIndicator />
        }

        return (
            <div>
                { this.state.categoryList ? (
                    <CategoryDropList 
                    categories={this.prepareCatList()} 
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