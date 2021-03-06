const express = require('express')
const server = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const models = require('./models')
server.use(cors())
server.use(bodyParser.json())

// let books = [
// {
//     title: "book1",
//     genre: "fiction",
//     publisher: "Penguin",
//     year: 1972,
//     imageURL: "https://www.image.com"
// },
// {
//     title: "book2",
//     genre: "fiction",
//     publisher: "Penguin",
//     year: 1988,
//     imageURL: "https://www.image.com"
// }
// ]

server.post('/api/books', (req, res) => {

    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imageURL = req.body.imageURL

    console.log(title)
    console.log(genre)

    let book = models.Book.build({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    })
    book.save().then((savedBook) => {
    }).then(() => {
        res.json({ success: true, message: "book was added" })
    })

})

server.post('/api/delete', (req, res) => {
    let bookID = req.body.id
    // console.log(book)
    models.Book.destroy({
        where: {
            id: bookID
        }
    })
        .then(() => {
            res.json({ success: true, message: "book was deleted" })
        })

    // let index = books.indexOf(book)
    // console.log(index)
    // books.splice(index, 1)
    // books.filter((book) => book != book)
})

server.get('/api/books', (req, res) => {

    models.Book.findAll().then((books) => {
        // console.log(books)
        // res.json(books)
        res.json(books)

    })
    // res.json(books)
})
server.get('/api/update/id/:id', (req, res) => {
    let bookID = req.params.id
    console.log(bookID)
    models.Book.findByPk(bookID).then((book) => {
        console.log(book)
        res.json(book)
    })
})

server.post('/api/update', (req, res) => {
    title = req.body.title
    genre = req.body.genre
    publisher = req.body.publisher
    year = req.body.year
    imageURL = req.body.imageURL
    id = req.body.id

    models.Book.update({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imageURL: imageURL
    }, {
            where: {
                id: id
            }
        }).then(() => {
            res.json({ success: true, message: "book was updated" })
        })

})

server.listen(8080, () => {
    console.log("Listening on 8080")
})