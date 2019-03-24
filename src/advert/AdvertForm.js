import React, {Component} from "react"
import {getCategories} from "../utils/APIUtils"
import Select from 'react-select';

class AdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: {},
            description: '',
            imgUrls: {},
            categoryTree: [],
            categoryList: [],
            subcategoryList: [],
            selectedCat: null,
            selectedSubcat: null,
            mounted: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        getCategories().then(response => {
                this.setState({categoryTree: response});
                for (let i = 0; i < this.state.categoryTree.length; i++) {
                    this.state.categoryList.push({label: this.state.categoryTree[i].categoryName, value: i});
                }
                this.setState({mounted: true});
                this.setState(this.state);
            }
        ).catch(error => {
            console.log("error: " + error);
        });

    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({[inputName]: inputValue})
    }

    handleCatChange = (selectedCat) => {
        this.setState({selectedCat});
        for (let i = 0; i < this.state.categoryTree.length; i++) {
            if (this.state.categoryTree[i].categoryName === selectedCat.label) {
                const list = [];
                for (let j = 0; j < this.state.categoryTree[i].subCategories.length; j++) {
                    list.push({
                        label: this.state.categoryTree[i].subCategories[j].subcategoryName,
                        value: j
                    });
                }
                this.setState({subcategoryList: list, selectedSubcat: list[0]});
                break;
            }
        }
    }
    handleSubcatChange = (selectedSubcat) => {
        this.setState({selectedSubcat});
    }

    handleSubmit(event) {

    }

    render() {
        const {selectedCat} = this.state;
        const {selectedSubcat} = this.state;

        var catList = (this.state.mounted ?
            <Select options={this.state.categoryList} name="currentCategory" value={selectedCat}
                    placeholder="Kategoria"
                    onChange={this.handleCatChange}/> : <a/>);

        var subcatList = (this.state.mounted ?
            <Select options={this.state.subcategoryList} name="currentSubcategory" value={selectedSubcat}
                    placeholder="Podkategoria"
                    onChange={this.handleSubcatChange}/> : <a/>);

        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="title" placeholder="Tytuł"
                       value={this.state.title} onChange={this.handleInputChange} required/>

                <textarea name="description" placeholder="Opis"
                          value={this.state.description} onChange={this.handleInputChange} required/>
                {catList}
                {subcatList}
            </form>
        );
    }
}

export default AdvertForm