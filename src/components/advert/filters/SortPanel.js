import React, { Component } from 'react'
import styled from 'styled-components'

const SortBox = styled.div`
    width: 100%;    
    text-align: center;
    padding-bottom: 1rem;

    & > div {
        display: flex;
        flex: justify;
        align-items: center;
        text-align: center;
        margin: auto;

        & > button {
            display: flex;
            height: 100%;
            align-items: center;
            text-align: center;
            margin: auto;
        }
    }
`;

class SortPanel extends Component {

    constructor() {
        super()

        this.sortData = this.sortData.bind(this)
    }

    sortData(event) {
        this.props.changeHandler();
    }

    sortData = (event) => {
        const target = event.target;
        const name = target.name;

        let sortList = this.props.sortingState

        if(name.includes("title")) {
            sortList = sortList.filter((value) => {
                return value.includes('date')
            })
            if(name.includes("asc")) {
                sortList.push("title,asc")
            } else if (name.includes("desc")) {
                sortList.push("title,desc")
            }
        } else if (name.includes("date")) {
            sortList = sortList.filter((value) => {
                return value.includes('title')
            })
            if(name.includes("asc")) {
                sortList.push("date,asc")
            } else if (name.includes("desc")) {
                sortList.push("date,desc")
            }
        } else {
            sortList = []
        }

        this.props.changeHandler(sortList);
        //updateContent(this.state.currentCategory, this.state.currentTitleFilter, this.state.currentPage, sortList)
    }

    render() {
        return (
            <SortBox>

                <div>
                <button className="btn btn-block" name="title_desc" onClick={this.sortData}>Nazwa malejąco</button>
                    <button className="btn btn-block" name="title_asc" onClick={this.sortData}>Nazwa rosnąco</button>
                    <button className="btn btn-block" name="date_desc" onClick={this.sortData}>Data malejąco</button>
                    <button className="btn btn-block" name="date_asc" onClick={this.sortData}>Data rosnąco</button>
                    <button className="btn btn-block" name="reset" onClick={this.sortData}>Resetuj</button>
                </div>
            </SortBox>
        )
    }
}

export default SortPanel;