import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

class CategoryDropList extends Component {
    constructor() {
        super()
        this.state = {
            categoryList: [],
            selected: -1,
            selectedId: -1,
            level: 0
        }
    }

    setCategory = (index, id) => {
        this.setState({
            selected: index,
            selectedId: id
        })
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
        for(let i = 0; i < this.state.categoryList.length; i++) {
            let category = this.state.categoryList[i]
            categories.push(
                <div>
                    { this.state.selected === i ? (
                    <ListGroup.Item className="categoryActive" action width="100%"
                        onClick={() => this.setCategory(i, category['id'])}
                        key={ category['name'] + category['id']}> 
                    { (this.state.level + 1) + ". " + category['name'] }  
                    </ListGroup.Item>
                ) : (
                    <ListGroup.Item action width="100%"
                            onClick={() => this.setCategory(i, category['id'])}
                            key={ category['name'] + category['id']}> 
                        { (this.state.level + 1) + ". " + category['name'] }  
                    </ListGroup.Item>
                )}
                </div>
            )

            if (i === this.state.selected && category['subcategories'].length > 0) {
                categories.push(
                    <CategoryDropList key={category['name']} 
                    categories={this.state.categoryList[this.state.selected]['subcategories']}
                    next_level={this.state.level + 1} />
                )
            }
        }

        return categories
    }

    render() {
        return (
            <div>
                <ListGroup>
                    { this.createList() }
                </ListGroup>
            </div>
        )
    }
}

export default CategoryDropList