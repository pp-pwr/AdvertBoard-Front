import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { updateContent } from './AdvertGrid'

class CategoryDropList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryList: [],
            selected: -1,
            selectedId: -1,
            level: 0
        }

        this.prev_state = {
            selected: -1,
            selectedId: -1
        }

        this.selectedCategory = this.props.selected
    }

    setCategory = (index, id) => {
        this.prev_state = {
            selected: this.state.selected,
            selectedId: this.state.selectedId
        }

        if(this.state.selected !== index && this.state.selectedId !== id) {
            this.setState({
                selected: index,
                selectedId: id
            })
            this.selectedCategory = true
            updateContent(id)
        } else {
            this.setState({
                selected: this.prev_state.selected,
                selectedId: this.state.selectedId
            })
            this.selectedCategory = false
            updateContent(this.prev_state.selectedId)
        }
    }

    componentDidMount() {
        let selectedIndex = -1
        if(this.props.categories && this.state.selected !== -1) {
            selectedIndex = this.props.categories[0]['id']
        }

        this.setState({
            categoryList: this.props.categories,
            selected: -1,
            selectedId: selectedIndex,
            level: this.props.next_level
        })
    }

    createList = () => {
        let categories = []

        if(!this.state.categoryList)
            return

        for(let i = 0; i < this.state.categoryList.length; i++) {
            let category = this.state.categoryList[i]
            let state = "categoryInactive"

            categories.push(
                <ListGroup.Item className="category-list-item" action width="100%"
                            onClick={() => this.setCategory(i, category['id'])}
                            key={ category['name'] + category['id']}> 
                        { (this.state.level + 1) + ". " + category['name'] }  
                </ListGroup.Item>
            )
                
            if (i === this.state.selected && category['subcategories'].length > 0) {
                categories.push(
                    <CategoryDropList key={category['name']} 
                    categories={this.state.categoryList[this.state.selected]['subcategories']}
                    next_level={this.state.level + 1} selectedCategory={false}/>
                )
            }
        }

        return categories
    }

    render() {
        return (
            <div className="category-listgroup">
                { this.state.level === 0 ? (
                    <ListGroup.Item className="categoryInactive" action width="100%"
                            onClick={() => this.setCategory(-1, 0)}
                            key="all"> 
                        Wszystkie  
                    </ListGroup.Item>
                ) : (
                    <div></div>
                )}
                <ListGroup>
                    { this.createList() }
                </ListGroup>
            </div>
        )
    }
}

export default CategoryDropList