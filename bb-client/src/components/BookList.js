import React, { Component } from 'react';
import { booleanLiteralTypeAnnotation } from '@babel/types';


export class BookList extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            id: '',
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

    populateBooks() {
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
        console.log(name.id)
        // this.setState({
        //     books: this.state.books.filter((book) => book != name)
        // })
        fetch("http://localhost:8080/api/delete", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(name)
            body: JSON.stringify({
                id: name.id,
            })
        }).then(() => {
            // this.props.history.push('./view-all-books')
            this.populateBooks()
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
                    <img src={book.imageURL}></img>
                    <input type="hidden" name="id" value={book.id}></input>
                    <button onClick={() => this.handleDeleteClick(book)}>Delete</button>
                </div>
            </li >

        })
        return (
            <ul> {bookItems}</ul >
        )
    }
}