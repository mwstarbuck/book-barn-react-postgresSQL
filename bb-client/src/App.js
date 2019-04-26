import React, { Component } from 'react';
// import './images'
import './App.css';

class App extends Component {

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
  handleViewAllClick = () => {
    let url = "http://localhost:8080/api/books"
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          books: json
        })
      })
  }
  //   fetch(url)
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({
  //         books: json
  //       })
  //     })
  // }

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
          <img src="{book.imageURL}"></img>
          <button>Delete</button>
        </div>
      </li>
    })

    return (
      <div className="App">
        <h1>Big Books</h1>
        <h3>Your Go To Source of All big books</h3>
        <img className="front-image" src="https://cdn.pixabay.com/photo/2015/06/02/12/59/narrative-794978_1280.jpg"></img>
      </div>
    )

  }
}
export default App;
