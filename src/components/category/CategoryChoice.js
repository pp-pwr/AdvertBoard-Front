import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { getCategoryLabel } from '../../utils/APIUtils'
import styled from 'styled-components'
import LoadingIndicator from "../../common/LoadingIndicator"

const ListItem = styled(ListGroup.Item)`
    width: 100%;
    display: flex;
    align-items: center;
    border: none;
    position: relative;
    margin-top: 0.2rem;

    & > img {
        width: 36px;
        height: auto;
        border-radius: 18px;
        margin-right: 0.4rem;
    }

    &::after {
        content: "";
        position: absolute;
        left: 10%;
        bottom: 0;
        width: 90%;
        height: 2px;
        background: lightgrey;

        transform: scaleX(0);
        transform-origin: left;

        transition: transform 250ms ease-in;
    }

    &:hover::after {
        transform: scaleX(1);
    }

    &.selected {
        font-weight: bold;
    }

    &.top-cat {
        font-weight; bold;
    }

    &.top-cat::before {
        content: '<';
        font-size: 1.2em;
        font-weight: bold;
        margin-right: 0.5rem;
    }

    &.root-cat {
        display: none;
    }
`

class CategoryDropList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryList: [],
            selected: -1,
            selectedId: null,
            prev_selected: [],
            prev_selectedId: [],
            level: 0
        }

        this.selectedCategory = this.props.selected
        this.changeCategory = this.changeCategory.bind(this)
    }

    setCategory = (category, level, save_history = false) => {
        let newSelectedId = this.state.selectedId

        if(newSelectedId === null || newSelectedId['id'] !== category['id']) {
            newSelectedId = category
        }
        
        if(save_history) {
            this.setState({
                prev_selectedId: [
                    ...this.state.prev_selectedId,
                    this.state.selectedId
                ]
            })
        }

        this.setState({
            selectedId: newSelectedId,
            level: level
        }, () => {
            this.props.changeHandler(category['id']);
        })
    }

    componentDidMount() {
        this.setState({
            categoryList: this.props.categories,
            selectedId: this.props.categories[0],
            level: this.props.next_level,
            mounted: true
        })
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    createTopLevelList() {
        let categories = []

        for(let i = 0; i < this.state.categoryList.length; i++) {
            let category = this.state.categoryList[i]

            categories.push(
                this.getListItem(category, this.state.level, false)
            )
        }

        return categories
    }

    changeCategory(e, category, level) {
        e.preventDefault()

        if(this.state.selectedId !== null && this.state.selectedId['id'] === category['id']) {
            if(this.state.prev_selectedId.length > 0) {
                this.setCategory(
                    this.state.prev_selectedId.pop(),
                     level - 1)
            }
        } else {
            this.setCategory(category, level + 1, true)
        }
    }

    createList() {
        let categories = []

        if(!this.state.categoryList)
            return

        if(this.state.level === 0)
            return this.createTopLevelList()

        const current_cat = this.state.selectedId
        const sub_cats = current_cat['subcategories']

        categories.push(
            this.getListItem(current_cat, this.state.level, true)
        )

        for(let i = 0; i < sub_cats.length; i++) {
            const sub_cat = sub_cats[i];

            categories.push(
                this.getListItem(sub_cat, this.state.level + 1, false)
            )
        }

        return categories
    }

    getListItem(category, level, backBtn = false) {

        if(category === null || category === 0)
            return null

        let className =  'category-list-item'
        className = backBtn ? 'top-cat category-list-view' : className;
        className = category['name'] === 'root' ? 'root-cat category-list-item' : className

        const categoryName = category['name'] === 'root' ? 'Wszystkie' : category['name']

        return (
            <ListItem
                className={className}
                onClick={(e) => this.changeCategory(e, category, level + 1)}
                key={category['name'] + category['id']}>

                <img id={'catimg_' + category['id']} src={getCategoryLabel(categoryName)} alt={category['name']} />
                { categoryName }
            </ListItem>
        )
    }

    render() {
        if(!this.state.mounted)
            return <LoadingIndicator />

        return (
            <ListGroup>
                { this.createList()}
            </ListGroup>
        )
    }
}

export default CategoryDropList