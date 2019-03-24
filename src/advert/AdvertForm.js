import React, {Component} from "react"
import {getCategories} from "../utils/APIUtils"
import Select from 'react-select';

class AdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertInfo: {
                title: '',
                tags: '',
                description: '',
                imgUrls: '',
                selectedCat: null,
                selectedSubcat: null
            },
            categoryTree: [],
            categoryList: [],
            subcategoryList: [],
            mounted: false
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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

        this.setState({ 
            advertInfo:{
                [inputName]: inputValue
            }})
    };

    handleCatChange = (selectedCat) => {
        this.setState({
            advertInfo: {
                selectedCat: selectedCat
            }});
        for (let i = 0; i < this.state.categoryTree.length; i++) {
            if (this.state.categoryTree[i].categoryName === selectedCat.label) {
                const list = [];
                for (let j = 0; j < this.state.categoryTree[i].subCategories.length; j++) {
                    list.push({
                        label: this.state.categoryTree[i].subCategories[j].subcategoryName,
                        value: j
                    });
                }
                this.setState({
                    subcategoryList: list,
                    advertInfo: {
                        selectedSubcat: list[0]
                    }});
                break;
            }
        }
    }
    handleSubcatChange = (selectedSubcat) => {
        this.setState({
            advertInfo: {
                selectedSubcat: selectedSubcat
            }})
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.advertInfo.title.length > 0 && this.state.advertInfo.description.length > 0) {
            const advertRequest = Object.assign({}, this.state.advertInfo)
        }
    }

    // handleSubmit(event) {
    //     event.preventDefault();

    //     if(this.state.userInfo.email.length > 0 && this.state.userInfo.password.length > 0){
    //         const loginRequest = Object.assign({}, this.state.userInfo)
            
    //         login(loginRequest)
    //         .then(response => {
    //             localStorage.setItem(ACCESS_TOKEN, response.accessToken)
    //             this.props.loadUser(true)
    //             this.props.history.push("/")
    //         }).catch(error => {
    //             Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
    //         })
    //     } else {
    //         Alert.error("Żadne z pól nie może być puste!")
    //     }
    // }

    render() {
        const {selectedCat} = this.state.advertInfo;
        const {selectedSubcat} = this.state.advertInfo;
        const {mounted} = this.state;
        const {title} = this.state.advertInfo;
        const {description} = this.state.advertInfo;
        const {tags} = this.state.advertInfo;
        const {imgUrls} = this.state.advertInfo;

        var catList = (mounted ?
            <Select options={this.state.categoryList} name="currentCategory" value={selectedCat}
                    placeholder="Kategoria"
                    onChange={this.handleCatChange} required/> : <br/>);

        var subcatList = (mounted ?
            <Select options={this.state.subcategoryList} name="currentSubcategory" value={selectedSubcat}
                    placeholder="Podkategoria"
                    onChange={this.handleSubcatChange} required/> : <br/>);

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
                <button type="submit" 
                    disabled={selectedSubcat == null } 
                    className={`btn btn-block btn-primary`} 
                    onClick={ this.handleSubmit }>Dodaj ogłoszenie</button>
            </form>
        );
    }
}

export default AdvertForm