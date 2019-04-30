import React, { Component } from 'react'
import { getCategories } from "../../utils/APIUtils"
import LoadingIndicator from '../../common/LoadingIndicator';
import ReactSearchBox from 'react-search-box'
import styled from 'styled-components'

import deleteButton from '../../assets/images/deleteButton.png'

const Preferences = styled.div`

`

const PreferenceList = styled.div`
    margin-top: 3vh;
    margin-bottom: 3vh;
`

class UserPreferences extends Component {
    constructor() {
        super()

        this.state = {
            categoryList: [],
            selectedCategories: [],
            mounted: false
        }

        this.categories = []

        this.userChosenPreferences = this.userChosenPreferences.bind(this)
        this.removeUserChoice = this.removeUserChoice.bind(this)
        this.notifyParent = this.notifyParent.bind(this)
    }

    componentDidMount() {
        this.setState({
            mounted: false
        }, () => {
            this.initCategoryList();
        })
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    addChilds(categoryList) {
        if (!categoryList || categoryList.length < 1)
            return

        for(let i = 0; i < categoryList.length; i++) {
            let category = categoryList[i]
            this.categories.push({
                key: category['id'],
                value: category['name'],
                chosen: false
            })
            this.addChilds(category['subcategories'])
        }
    }

    handleCatChange(selectedCatId) {
        let curr_cat = null
        for(let i = 0; i < this.categories.length; i++) {
            curr_cat = this.categories[i]
            if(curr_cat.key === selectedCatId && !this.state.selectedCategories.some( cat => cat['id'] === selectedCatId)) {
                this.setState({
                    selectedCategories: [...this.state.selectedCategories, 
                        {
                            id: curr_cat.key,
                            name: curr_cat.value
                        }
                    ]
                }, () => {
                    this.notifyParent()
                })
            }
        }
    }

    initCategoryList() {
        getCategories()
        .then(response => {
            const categoryTree = response
            this.categories = []
            this.addChilds(categoryTree['subcategories'])

            this.setState({
                categoryList: this.categories,
                mounted: true
            }, () => {
                console.log(this.state.categoryList);
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    notifyParent() {
        let categoryIdList = []

        this.state.selectedCategories.forEach( cat => {
            categoryIdList.push(cat.id)
        })

        this.props.updateForm(categoryIdList)
    }

    removeUserChoice(id) {
        this.setState({
            selectedCategories: this.state.selectedCategories.filter( cat => cat.id !== id)
        }, () => {
            this.notifyParent();
        })
    }

    userChosenPreferences() {
        let preferences = []

        if(this.state.selectedCategories.length > 0) {
            preferences.push(
                <p>Preferowane kategorie: <br/></p>
            )
        }

        for(let i = 0; i < this.state.selectedCategories.length; i++) {
            let category = this.state.selectedCategories[i]

            preferences.push(
                <CategoryElement key={category.id + "_" + category.name} cat={category} onDelete={this.removeUserChoice} />
            )
        }
        return preferences
    }

    render() {
        if(!this.state.mounted) {
            return <LoadingIndicator />
        }

        return (
            <Preferences>
                <ReactSearchBox data={this.categories} onSelect={record => this.handleCatChange(record['key'])}/>
                <PreferenceList>
                    { this.userChosenPreferences() }
                </PreferenceList>
            </Preferences>
        )
    }
}

const DeleteButton = styled.button`
    margin-right: 5%;
    vertical-align: middle;
    resizeMode: contain
`

const CategoryName = styled.div`
    flex-grow: 5
    text-align: left;
    margin-left: 5%;
    margin-top: 5%
    vertical-align: middle;
`

const SelectedCategory = styled.div`
    display: flex;
    flex-grow: 1;
    height: 8vh;
`

const imageStyle = {
    resizeMode: 'contain'
}

class CategoryElement extends Component {

    constructor(props) {
        super(props)

        this.category = props.cat
        this.handleRemoveButton = this.handleRemoveButton.bind(this)
    }

    handleRemoveButton() {
        this.props.onDelete(this.category.id)
    }

    render() {
        return (
            <SelectedCategory>
                <CategoryName>{this.category.name}</CategoryName>
                <DeleteButton onClick={this.handleRemoveButton}>
                    USUŃ
                </DeleteButton> 
            </SelectedCategory>
        )
    }
}

export default UserPreferences;