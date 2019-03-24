import React, {Component} from "react"
import {getCategories} from "../utils/APIUtils"

class AdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: {},
            description: '',
            imgUrls: {},
            subcategory: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {

    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({[inputName]: inputValue})
    }

    handleSubmit(event) {
        event.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Tytuł"
                       value={this.state.title} onChange={this.handleInputChange} required/>
                <br/>
                <textarea name="description" placeholder="Opis"
                          value={this.state.description} onChange={this.handleInputChange} required/>
            </form>

        )
    }
}

export default AdvertForm