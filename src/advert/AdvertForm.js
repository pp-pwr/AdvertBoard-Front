import React, {Component} from "react"
import {getCategories, addAdvert } from "../utils/APIUtils"
import Select from 'react-select';
import Alert from 'react-s-alert'
import FileBase64 from 'react-file-base64'
import image2base64 from 'image-to-base64'

class AdvertForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            advertInfo: {
                title: '',
                tags: '',
                description: '',
                image: '',
                fileName: '',
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
            advertInfo: {
                ...this.state.advertInfo,
                [inputName]: inputValue
            }})
    };

    loadFiles(file) {
        let base64_string = JSON.stringify(file.base64).substring(23)
        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                image: {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    base64: base64_string
                }
            }
        })
    }

    // handleFileChange = (event) => {
    //     const target = event.target
    //     const file = target.files[0]

    //     image2base64(file)
    //         .then((response) => {
    //             this.setState({
    //                 advertInfo: {
    //                     ...this.state.advertInfo,
    //                     image: response,
    //                     fileName: target.value
    //                 }
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    handleCatChange = (selectedCat) => {
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
                        ...this.state.advertInfo,
                        selectedSubcat: list[0],
                        selectedCat: selectedCat
                    }});
                break;
            }
        }
    }
    
    handleSubcatChange = (selectedSubcat) => {
        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                selectedSubcat: selectedSubcat
            }})
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.advertInfo.title.length > 0 && this.state.advertInfo.description.length > 0 
            && this.state.advertInfo.selectedSubcat) {

            const advertInfo = {
                "title": this.state.advertInfo.title,
                "description": this.state.advertInfo.description,
                "tags": this.state.advertInfo.tags.split(/(\s+)/).filter( e => e.trim().length > 0),
                "subcategory": this.state.advertInfo.selectedSubcat.label,
                "image": this.state.advertInfo.image
            }

            addAdvert(advertInfo)
                .then(response => {
                    Alert.success("Pomyślnie dodano ogłoszenie!")
                    this.props.history.push("/")
                }).catch(error => {
                Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
                })
        } else {
            Alert.error("Musisz podać nazwę, opis oraz podkategorię!")
        }
    }

    render() {
        const {selectedCat} = this.state.advertInfo;
        const {selectedSubcat} = this.state.advertInfo;
        const {mounted} = this.state;

        var catList = (mounted ?
            <Select className="add-advert-item" options={this.state.categoryList} name="currentCategory" value={selectedCat}
                    placeholder="Kategoria"
                    onChange={this.handleCatChange} required/> : <br/>);

        var subcatList = (mounted ?
            <Select className="add-advert-item" options={this.state.subcategoryList} name="currentSubcategory" value={selectedSubcat}
                    placeholder="Podkategoria"
                    onChange={this.handleSubcatChange} required/> : <br/>);

        return (
            <div className="add-advert-container">
                <form className="add-advert-content" enctype="multipart/form-data" onSubmit={this.handleSubmit}>
                    <h3>Dodaj ogłoszenie</h3>
                    <div>
                        <input className="add-advert-item" type="text" name="title" placeholder="Tytuł"
                            value={this.state.advertInfo.title} onChange={this.handleInputChange} required/>
                        <br/>
                        <textarea className="add-advert-item" rows={5} name="description" placeholder="Opis"
                                value={this.state.advertInfo.description} onChange={this.handleInputChange} required/>
                        <br/>
                        <input className="add-advert-item" type="text" name="tags" placeholder="Tagi"
                            value={this.state.advertInfo.tags} onChange={this.handleInputChange} />
                        <br/>
                        {/* <input className="add-advert-item" type="file" name="image" size="50"
                            value={this.state.advertInfo.fileName ? this.state.advertInfo.fileName : ""} onChange={this.handleFileChange}/> */}
                        <FileBase64 className="add-advert-item" multiple={false} onDone={this.loadFiles.bind(this)} />
                        <br/>
                    </div>
                    {catList}
                    {subcatList}
                    <div className="add-advert-item">
                        <button type="submit" 
                            disabled={selectedSubcat == null } 
                            className={`btn btn-block btn-primary`} 
                            onClick={ this.handleSubmit }>Dodaj ogłoszenie</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default AdvertForm