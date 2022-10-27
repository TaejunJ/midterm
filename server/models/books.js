/*
Name: Taejun Jang
Student Number: 301228129
Section Number: 017
App: Midterm application
File: books.js
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
