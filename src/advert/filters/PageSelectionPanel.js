import React, { Component } from 'react'

class PageSelectionPanel extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            currentPage: 0
        }

        this.createButtons = this.createButtons.bind(this)
    }

    setPage(page) {
        if(page < 0) {
            page = 0
        }

        if(page >= this.props.pages) {
            page = this.props.pages - 1
        }

        this.setState({
            currentPage: page
        })
        //updatePage(page)
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
                        <li key={ "page_prev" } onClick={() => this.setPage(this.state.currentPage - 1)} className='left page-numbers'>
                            <button>Poprzednia</button>
                        </li>
                        { this.createButtons() }
                        <li key={ "page_next" } onClick={() => this.setPage(this.state.currentPage + 1)} className='right page-numbers'>
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