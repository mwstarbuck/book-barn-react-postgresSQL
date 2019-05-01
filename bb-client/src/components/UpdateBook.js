import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

export class UpdateBook extends Component {
    constructor() {
        super()
        this.state = {
            books: [],
            book: {},
            id: 0,
            title: '',
            genre: '',
            publisher: '',
            year: 0,
            imageURL: ''
        }
    }
    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state.genre) // working
        })
    }


    componentDidMount() {
        console.log(this.props)
        let bookID = this.props.match.params.id
        let url = "http://localhost:8080/api/update/id/" + bookID
        fetch(url)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({
                    book: json
                })
            })
        console.log(this.state.book)
    }

    handleUpdateBookClick = (bookid) => {
        this.setState({
            title: this.props.title,
            genre: this.props.genre,
            publisher: this.props.publisher,
            year: this.props.year,
            imageURL: this.props.imageURL
        })

        let book = {
            title: this.state.title,
            genre: this.state.genre,
            publisher: this.state.publisher,
            year: this.state.year,
            imageURL: this.state.imageURL,
            id: bookid
        }
        console.log(book.id)
        fetch('http://localhost:8080/api/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(book)
            body: JSON.stringify({
                title: this.state.title,
                genre: this.state.genre,
                publisher: this.state.publisher,
                year: this.state.year,
                imageURL: this.state.imageURL,
                id: bookid
            })
        }).then(() => {
            this.props.history.push('./view-all-books')
        })
        // this.props.history.push('./view-all-books')

    }


    render() {
        return (
            <div>
                <h1>Update Book</h1>
                <input type="text" onChange={this.handleTextBoxChange} name="title" defaultValue={this.state.book.title}></input>
                <input type="text" onChange={this.handleTextBoxChange} name="genre" defaultValue={this.state.book.genre}></input>
                <input type="text" onChange={this.handleTextBoxChange} name="publisher" defaultValue={this.state.book.publisher}></input>
                <input type="text" onChange={this.handleTextBoxChange} name="year" defaultValue={this.state.book.year}></input>
                <input type="text" onChange={this.handleTextBoxChange} name="imageURL" defaultValue={this.state.book.imageURL}></input>
                <button onClick={() => this.handleUpdateBookClick(this.state.book.id)}>Update Book Info</button>

            </div>

        )
    }
}
