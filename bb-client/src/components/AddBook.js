import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'

export class AddBook extends Component {

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

    handleTextBoxChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            console.log(this.state.genre) // working
        })
    }


    handleSaveBookClick = () => {
        let book = {
            title: this.state.title,
            genre: this.state.genre,
            publisher: this.state.publisher,
            year: this.state.year,
            imageURL: this.state.imageURL
        }
        console.log(book)
        fetch('http://localhost:8080/api/books', {
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
            })
        })
            .then()

    }
    handleViewAll = () => {
        let url = "http://localhost:8080/api/books"
        fetch(url)
            .then(response => response.json())
            .then(json => {
                this.setState({
                    books: json
                })
            }, () => {
                this.render()
            })
    }

    render() {
        return (

            <div>
                <h1>AddBook</h1>
                <input type="text" onChange={this.handleTextBoxChange} name="title" placeholder="Enter Title"></input>
                <input type="text" onChange={this.handleTextBoxChange} name="genre" placeholder="Enter Genre"></input>
                <input type="text" onChange={this.handleTextBoxChange} name="publisher" placeholder="Enter Publisher"></input>
                <input type="text" onChange={this.handleTextBoxChange} name="year" placeholder="Enter Year Published"></input>
                <input type="text" onChange={this.handleTextBoxChange} name="imageURL" placeholder="Paste Image URL"></input>
                <button onClick={this.handleSaveBookClick}>Add Book</button>
                <button onClick={this.handleViewAllClick}>View All Books</button>
                {/* <ul>{bookItems}</ul> */}

            </div>

        )
    }
}
