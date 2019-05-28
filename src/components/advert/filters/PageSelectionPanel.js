import React, { Component } from 'react'
import styled from 'styled-components'
import '../../../common/Pagination.scss'

class PageSelectionPanel extends Component {
    constructor(props) {
        super(props);
        
        this.currentPage = 0;

        this.createButtons = this.createButtons.bind(this)
        this.notifyParent = this.notifyParent.bind(this)
    }

    notifyParent() {
        this.props.changeHandler(this.currentPage)
    }

    setPage(page) {
        if(page < 0) {
            page = 0
        }

        if(page >= this.props.pages) {
            page = this.props.pages - 1
        }

        this.currentPage = page
        this.notifyParent()
    }

    createButtons() {
        let buttons = []


        for(let i = 0; i < this.props.pages; i++) {

            if(this.props.pages > 20 && (i > 5) && i < this.props.pages - 1 && (i > this.currentPage) && this.currentPage < this.props.pages / 2) {
                buttons.push(
                    <li key={"page_dots" } className='page-numbers'>
                        <button style={{"font-size": "0.6rem"}}>...</button>
                    </li>
                )
                i = this.props.pages - 2;
            } else if(this.props.pages > 20 && i > 1 && i < this.props.pages - 5 && (i < this.currentPage) && this.currentPage > this.props.pages / 2 ) {
                buttons.push(
                    <li key={"page_dots" } className='page-numbers'>
                        <button style={{"font-size": "0.6rem"}}>...</button>
                    </li>
                )
                i = this.props.pages - 2;
            } else {
                buttons.push(
                    <li key={ "page_" + i } onClick={() => this.setPage(i)} className='page-numbers'>
                        <button style={{"font-size": "0.6rem"}}>{ i + 1}</button>
                    </li>
                );
            }
        }
        return buttons
    }

    render() {
        return (
            <div>
                { this.props.pages > 1 ? (
                    <ul className="pagination">
                        <li key={ "page_prev" } onClick={() => this.setPage(this.currentPage - 1)} className='left page-numbers'>
                            <button style={{"font-size": "0.75em"}}>Poprzednia</button>
                        </li>
                        { this.createButtons() }
                        <li key={ "page_next" } onClick={() => this.setPage(this.currentPage + 1)} className='right page-numbers'>
                            <button style={{"font-size": "0.75em"}}>Następna</button>
                        </li>
                    </ul>
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}

export default PageSelectionPanel