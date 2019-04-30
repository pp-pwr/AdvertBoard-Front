import React, { Component } from 'react'

import '../../common/Pagination.scss'

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
            buttons.push(
                <li key={ "page_" + i } onClick={() => this.setPage(i)} className='page-numbers'>
                    <button>{ i + 1}</button>
                </li>
            );
        }
        return buttons
    }

    render() {
        return (
            <div>
                { this.props.pages > 0 ? (
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