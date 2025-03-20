const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookTitle: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    unique: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  bookDescription: {
    type: String,
    required: true,
  },
  bookPDFURL: {
    type: String,
    unique: true,
    required: true,
  },
  price :{
    type: Number,
    unique: true,
    required: true,
  }
});

module.exports = mongoose.model("Book", bookSchema);
