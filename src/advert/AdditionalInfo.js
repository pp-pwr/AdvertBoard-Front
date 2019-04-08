import React, { Component } from 'react'
import LoadingIndicator from "../common/LoadingIndicator";

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

        console.log('props')
        console.log(this.props)
        for(let i = 0; i < info_arr.length; i++) {
            let info = info_arr[i]
            controls.push(
                <div key={info.id} className="category-info-control">
                    <label htmlFor={info.id}>{info.name}</label> 
                    <input id={info.id} name={info.id} type={this.fieldType(info.type)} onChange={this.props.infoChangeHandler} />
                </div>
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
            <div>
                { this.infos ? (
                    this.createFields(this.infos)
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}

export default AdditionalInfo