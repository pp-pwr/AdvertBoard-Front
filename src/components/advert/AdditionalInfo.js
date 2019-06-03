import React, { Component } from 'react'
import LoadingIndicator from "../../common/LoadingIndicator";
import styled from 'styled-components'

const MainContainer = styled.div`
    padding-left: 0.5rem;
    padding-right: 0.5rem;'
    height: 100%;
    overflow-y: scroll;
`

const CategoryInfo = styled.div`
    margin-top: 0.4rem;

    & > p {
        text-align: left;
    }
`

class AdditionalInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: false
        }

        this.infos = null
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    createFields(infos) {
        let controls = [];
        const info_arr = infos['infos']

        for(let i = 0; i < info_arr.length; i++) {
            let info = info_arr[i]
            controls.push(
                <CategoryInfo key={info.id}>
                    <p>{info.name}:<br/>
                    <input id={info.id} name={info.id} type={this.fieldType(info.type)} onChange={this.props.infoChangeHandler} />
                    </p> 
                </CategoryInfo>
            )
        }

        return controls
    }

    fieldType(infoType) {
        let result = ""
        switch(infoType) {
            case "intNum":
                result = "number"
                break;
            case "floatNum":
                result = "number"
                break;
            case "money":
                result = "number"
                break;    
            default:
                result = "text"

        }

        return result;
    }

    render() {
        if(!this.state.mounted)
            return <LoadingIndicator />
        
        this.infos = this.props.infos

        return (
            <MainContainer>
                { this.infos ? (
                    this.createFields(this.infos)
                ) : (
                    <div></div>
                )}
            </MainContainer>
        );
    }
}

export default AdditionalInfo