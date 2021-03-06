import React, {Component} from "react"
import {getCategories, addAdvert, updateAdvert } from "../../utils/APIUtils"
import Alert from 'react-s-alert'
import ReactSearchBox from 'react-search-box'
import LoadingIndicator from "../../common/LoadingIndicator";
import AdditionalInfo from './AdditionalInfo'
import styled from 'styled-components'

import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'

import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';

registerPlugin(FilePondPluginImagePreview)

const MainContainer = styled.div`

`

const InputArea= styled.div`

    & > .file-pond {
        margin-top: 1rem;
    }
`

export function setCategory(categoryId) {
    if(this !== undefined) {
        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                selectedCat: categoryId
            },
            advert_id: null
        })
    }
}

class AdvertForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            advertInfo: {
                title: '',
                tags: '',
                description: '',
                image: null,
                infos: {},
                selectedCat: props.advert_id
            },
            categoryList: [],
            currentCategory: null,
            mounted: false
        }

        this.categories = []
        this.update = false
        this.handleSubmit = this.handleSubmit.bind(this)
        this.loadFiles = this.loadFiles.bind(this)
    }

    addChilds(categoryList) {
        if (!categoryList || categoryList.length < 1)
            return

        for(let i = 0; i < categoryList.length; i++) {
            let category = categoryList[i]
            this.categories.push({
                key: category['id'],
                value: category['name'],
                infos: category['infoList']
            })
            this.addChilds(category['subcategories'])
        }
    }

    preloadAdvertData() {
        const advert = this.props.location.advert
        console.log(advert)
        let tags = []
        
        for(let i = 0; i < advert.tags.length; i++) {
            tags += advert.tags[i]
            if(i < advert.tags.length - 1) {
                tags += " "
            }
        }

        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                title: advert.title,
                description: advert.description,
                tags: tags,
                infos: advert.infos,

                id: advert.id
            }
        })
    }

    componentDidMount() {
        if (this.props.location.advert) {
            this.update = true
            this.preloadAdvertData();
        }

        getCategories().then(response => {
                const categoryTree = response
                this.categories = []
                this.addChilds(categoryTree['subcategories'])

                this.setState({
                    categoryList: this.categories,
                    mounted: true
                });
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

    loadFiles = (files) => {
        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                image: files[0].file
            }
        })
    }

    handleInfoChange = (event) => {
        const target = event.target;
        const inputName = parseInt(target.name)
        const inputValue = target.value;    

        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                infos: {
                    ...this.state.advertInfo.infos,
                    [inputName]: inputValue
                }
            }
        })
    }

    handleCatChange(selectedCatId) {
        let category = null
        let curr_cat = null
        for(let i = 0; i < this.categories.length; i++) {
            curr_cat = this.categories[i]
            if(curr_cat.key === selectedCatId) {
                category = curr_cat
            }
        }

        this.setState({
            advertInfo: {
                ...this.state.advertInfo,
                selectedCat: selectedCatId
            },
            currentCategory: category
        })
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.state.advertInfo.title.length > 0 && this.state.advertInfo.description.length > 0 
            && this.state.advertInfo.selectedCat) {
            

            console.log(this.state.advertInfo.infos)
            let advertInfo = {
                "title": this.state.advertInfo.title,
                "description": this.state.advertInfo.description,
                "tags": this.state.advertInfo.tags.split(/(\s+)/).filter( e => e.trim().length > 0),
                "category": this.state.advertInfo.selectedCat,
                "imageFile": this.state.advertInfo.image,
                "additionalInfo": JSON.stringify(this.state.advertInfo.infos)
            }
            
            console.log(advertInfo)

            if(!this.state.advert_id) {
                if(!this.update) {
                    addAdvert(advertInfo).then(response => {
                        Alert.success("Pomyślnie dodano ogłoszenie!")
                         this.props.history.push("/")
                    }).catch(error => {
                        Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")
                })
                } else {
                    advertInfo = {
                        ...advertInfo,
                        "id": this.state.advertInfo.id
                    }
                    updateAdvert(advertInfo).then(response => {
                        Alert.success("Pomyślnie zaktualizowano")
                         this.props.history.push("/")
                    }).catch(error => {
                        Alert.error((error && error.message) || "Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z administratorem!")                        
                    })
                }
            } else {
                advertInfo.push({ "id": this.state.advert_id })
            }
        } else {
            Alert.error("Musisz podać nazwę, opis oraz podkategorię!")
        }
    }

    render() {
        if(!this.state.mounted)
            return <LoadingIndicator/>


        return (
            <MainContainer className="add-advert-container">
                <div className="add-advert-content-whole">
                    <form className="add-advert-content" onSubmit={this.handleSubmit}>
                        <h3>Dodaj ogłoszenie</h3>
                        <InputArea>
                            <input className="add-advert-item" type="text" name="title" placeholder="Tytuł"
                                value={this.state.advertInfo.title} onChange={this.handleInputChange} required/>
                            <br/>
                            <textarea className="add-advert-item" rows={5} name="description" placeholder="Opis"
                                    value={this.state.advertInfo.description} onChange={this.handleInputChange} required/>
                            <br/>
                            <input className="add-advert-item" type="text" name="tags" placeholder="Tagi"
                                value={this.state.advertInfo.tags} onChange={this.handleInputChange} />
                            <br/>

                            <FilePond
                                className='file-pond'
                                ref={ref => (this.pond = ref)}
                                allowMultiple={false}
                                label-idle='Przenieś swój obrazek lub kliknij i dodaj go z dysku!'
                                maxFiles={1}
                                onupdatefiles={fileItems => {
                                    this.loadFiles(fileItems)
                                }} />

                            {/* <input className="add-advert-item" accept="image/*" type="file" name="image" size="50" onChange={(files) => this.loadFiles(files)}/> */}
                            <br/>
                        </InputArea>
                        
                        <ReactSearchBox className='category-search' data={this.categories} onSelect={record => this.handleCatChange(record['key'])}/>

                        <div className="add-advert-item">
                            <button type="submit" 
                                disabled={this.state.advertInfo.selectedCat == null } 
                                className={`btn btn-block btn-primary`} 
                                onClick={ this.handleSubmit }>Dodaj ogłoszenie</button>
                        </div>

                    </form>
                    <div className="add-advert-additional-info">
                        <AdditionalInfo infos={ this.state.currentCategory } infoChangeHandler={this.handleInfoChange}/>
                    </div>
                </div>
            </MainContainer>
        );
    }
}

export default AdvertForm