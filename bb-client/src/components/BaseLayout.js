import React, { Component } from 'react';
import { BookList } from './BookList'
import { AddBook } from './AddBook'
import { Link, NavLink } from 'react-router-dom'
import './BaseLayout.css'

export class Menu extends Component {
    render() {
        return (
            <ul className="navBar">
                <li><NavLink exact activeClassName="active-link" className="link" to="/">BigBooks</NavLink></li>
                <li><NavLink activeClassName="active-link" className="link" to="/view-all-books">View All Books</NavLink></li>
                <li><NavLink activeClassName="active-link" className="link" to="/AddBook">Add Book</NavLink></li>
            </ul >
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <div className="footer">Design By Mike -- Copyright 2019</div>
        )
    }
}

export class BaseLayout extends Component {
    render() {
        return (
            <div>
                <Menu></Menu>
                {this.props.children}
                <Footer></Footer>
            </div>
        )
    }
}