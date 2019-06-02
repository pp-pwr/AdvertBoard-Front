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

        let page_limit = 10;

        let className = 'page-numbers';

        buttons.push(
            <li key={ "page_first" } onClick={() => this.setPage(0)} className='page-numbers'>
                <button>Pierwsza</button>
            </li>
        )

        let i_lower = Math.max(0, this.currentPage - (page_limit / 2))
        let i_upper = Math.min(this.props.pages, this.currentPage + (page_limit / 2)) 

        if(i_upper < page_limit && this.currentPage < (page_limit / 2)) {
            i_upper = page_limit
        }

        if(i_lower > 0 && this.currentPage > (this.props.pages - page_limit / 2)) {
            i_lower = this.props.pages - page_limit;
        }

        for(let i = i_lower; i < i_upper; i++) {
            className = 'page-numbers'

            if(i === this.currentPage) {
                className = 'selected page-numbers'
            }

            buttons.push(
                <li key={ "page_" + i } onClick={() => this.setPage(i)} className={className}>
                <button>{ i + 1}</button>
            </li>
            )
        }

        buttons.push(
            <li key={ "page_first" } onClick={() => this.setPage(this.props.pages - 1)} className='page-numbers'>
                <button>Ostatnia</button>
            </li>
        )

        return buttons
    }

    render() {
        return (
            <div>
                { this.props.pages > 1 ? (
                    <ul className="pagination">
                        <li key={ "page_prev" } onClick={() => this.setPage(this.currentPage - 1)} className='left page-numbers'>
                            <button>Poprzednia</button>
                        </li>
                        { this.createButtons() }
                        <li key={ "page_next" } onClick={() => this.setPage(this.currentPage + 1)} className='right page-numbers'>
                            <button>Następna</button>
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