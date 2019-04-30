import React, { Component } from 'react'
import styled from 'styled-components'

const SearchBox = styled.div`
    items-align: flex-start;
    text-align: center;
`;

class SearchBoxPanel extends Component {
    constructor() {
        super()
        
        this.title = ""

        this.handleInputChange = this.handleInputChange.bind(this)
        this.notifyParent = this.notifyParent.bind(this);
    }

    notifyParent() {
        this.props.changeHandler(this.title)
    }

    handleInputChange = (event) => {
        this.title = event.target.value
    }

    render() {
        return (
            <SearchBox>
                    <input className="search-box-field" type="text" name="currentTitleFilter"
                                onChange={this.handleInputChange}/>
                    <button className="btn btn-primary" onClick={this.notifyParent}>Filtruj</button>
            </SearchBox>
        )
    }
}

export default SearchBoxPanel