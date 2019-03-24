import React, {Component} from "react"
import {getCategories} from "../utils/APIUtils"
import Select from 'react-select';

class AdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            tags: '',
            description: '',
            imgUrls: '',
            categoryTree: [],
            categoryList: [],
            subcategoryList: [],
            selectedCat: null,
            selectedSubcat: null,
            mounted: false
        };
    }

    componentDidMount() {
        getCategories().then(response => {
                this.setState({categoryTree: response});
                for (let i = 0; i < this.state.categoryTree.length; i++) {
                    this.state.categoryList.push({label: this.state.categoryTree[i].categoryName, value: i});
                }
                this.setState({mounted: true});
            }
        ).catch(error => {
            console.log("error: " + error);
        });

    }

    handleInputChange = (event) => {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({[inputName]: inputValue})
    };

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
        const {mounted} = this.state;
        const {title} = this.state;
        const {description} = this.state;
        const {tags} = this.state;
        const {imgUrls} = this.state;

        var catList = (mounted ?
            <Select options={this.state.categoryList} name="currentCategory" value={selectedCat}
                    placeholder="Kategoria"
                    onChange={this.handleCatChange} required/> : <a/>);

        var subcatList = (mounted ?
            <Select options={this.state.subcategoryList} name="currentSubcategory" value={selectedSubcat}
                    placeholder="Podkategoria"
                    onChange={this.handleSubcatChange} required/> : <a/>);

        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Dodaj ogłoszenie</h3>
                <div>
                    <input type="text" name="title" placeholder="Tytuł"
                           value={title} onChange={this.handleInputChange} required/>
                    <br/>
                    <textarea rows={5} cols={50} name="description" placeholder="Opis"
                              value={description} onChange={this.handleInputChange} required/>
                    <br/>
                    <input type="text" name="tags" placeholder="Tagi"
                           value={tags} onChange={this.handleInputChange}/>
                    <br/>
                    <input type="text" name="imgUrls" placeholder="Linki do zdjęć"
                           value={imgUrls} onChange={this.handleInputChange}/>
                </div>
                {catList}
                {subcatList}
                <input type="submit" disabled={selectedSubcat == null}/>
            </form>
        );
    }
}

export default AdvertForm