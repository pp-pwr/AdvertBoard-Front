import React, { Component } from 'react'
import styled from 'styled-components'
import '../../../common/Pagination.scss'

class PageSelectionPanel extends Component {
    constructor(props) {
        super(props);
        
        this.currentPage = 0;

        this.createButtons = this.createButtons.bind(this)
        this.notifyParent = this.notifyParent.bind(this)

        this.state = {
            width: 0,
            height: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions()
        window.addEventListener('resize', this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions)
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
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
        let show_add_btns = true

        if(this.state.width < 1100) {
            page_limit = 4;
            show_add_btns = false
        } else if (this.state.width < 600) {
            page_limit = 1;
            show_add_btns = false
        }

        let className = 'page-numbers';

        if(this.currentPage > 0) {
            buttons.push(
                <li key={ "page_first" } onClick={() => this.setPage(0)} className='page-numbers'>
                    <button>Pierwsza</button>
                </li>
            )
        }

        let i_lower = Math.max(0, this.currentPage - (page_limit / 2))
        let i_upper = Math.min(this.props.pages, this.currentPage + (page_limit / 2)) 

        if(i_upper < page_limit && this.currentPage < (page_limit / 2)) {
            i_upper = Math.min(this.props.pages, page_limit)
        }

        if(i_lower > 0 && this.currentPage > (this.props.pages - page_limit / 2)) {
            i_lower = Math.max(0, this.props.pages - page_limit)
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

        if(this.currentPage < this.props.pages - 1) {
            buttons.push(
                <li key={ "page_first" } onClick={() => this.setPage(this.props.pages - 1)} className='page-numbers'>
                    <button>Ostatnia</button>
                </li>
            )
        }

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