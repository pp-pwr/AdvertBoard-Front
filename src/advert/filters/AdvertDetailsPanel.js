import React, { Component } from 'react'
import styled from 'styled-components';

const AdvertDetail = styled.div`
    text-align: center;
    margin-top: 5vw;
`;

const DetailsPanel = styled.div`
    display-flex;
    items-align: flex-start;

    text-align: center;
    margin-top: 5vh;
`;

const RangeInput = styled.div`
`;

class AdvertDetailsPanel extends Component {
    constructor() {
        super()
        
        this.currentFilter = {}

        this.notifyParent = this.notifyParent.bind(this)
    }

    notifyParent() {
        console.log(this.state)
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

    createDetailsList() {
        let details = []

        for(let i = 0; i < this.props.details.length; i++) {
            let detailField = this.props.details[i]

            details.push(
                <AdvertDetail key={detailField['id']}> 
                    <div>{detailField['name']}</div>
                    { this.fieldType(detailField['type']) === "number" ? (
                        <RangeInput>
                            <input id={detailField['id'] + "_lower"} type="number" />
                            <input id={detailField['id'] + "_higher"} type="number" />  
                        </RangeInput>
                    ) : (
                        <input id={detailField['id']} type={this.fieldType(detailField['type'])} />
                    )}
                </AdvertDetail>
            )
        }

        return details
    }

    render() {
        return (
            <DetailsPanel>
                { this.createDetailsList() }
            </DetailsPanel>
        )
    }
}

export default AdvertDetailsPanel;