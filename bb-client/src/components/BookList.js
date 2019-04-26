import React, { Component } from 'react';
import { booleanLiteralTypeAnnotation } from '@babel/types';


export class BookList extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            title: '',
            genre: '',
            publisher: '',
            year: 0,
            imageURL: ''
        }
    }



    componentDidMount() {
        let url = "http://localhost:8080/api/books"
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    books: json
                })
            })
    }

    handleDeleteClick = (name) => {
        console.log("You Deleted A Book")

        this.setState({
            books: this.state.books.filter((book) => book != name)
        })
        fetch("http://localhost:8080/api/delete", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(name)
            // body: JSON.stringify({
            //     title: this.state.title,
            //     genre: this.state.genre,
            //     publisher: this.state.publisher,
            //     year: this.state.year,
            //     imageURL: this.state.imageURL,
            // })
        })
    }



    render() {
        let books = this.state.books
        let bookItems = books.map((book) => {
            return <li>
                <div>
                    <p>{book.title}</p>
                    <p>{book.genre}</p>
                    <p>{book.publisher}</p>
                    <p>{book.year}</p>
                    <p>{book.imageURL}</p>
                    <button onClick={() => this.handleDeleteClick(book)}>Delete</button>
                </div>
            </li>

        })
        return (
            <ul>{bookItems}</ul>
        )
    }
}