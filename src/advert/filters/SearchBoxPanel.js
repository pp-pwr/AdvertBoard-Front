import React, { Component } from 'react'

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
            <div className="search-box" width="30px">
                    <input className="search-box-field" type="text" name="currentTitleFilter"
                                onChange={this.handleInputChange}/>
                    <button className="btn btn-primary" onClick={this.notifyParent}>Filtruj</button>
            </div>
        )
    }
}

export default SearchBoxPanel