const Book = require("../models/Book");
const { ObjectId } = require("mongodb");

const uploadBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  const id = req.params.id;
  const updateBooksData = req.body;
  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };

  try {
    const updateDoc = {
      $set: {
        ...updateBooksData,
      },
    };
    const result = await Book.updateOne(filter, updateDoc, options);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };

  try {
    const result = await Book.deleteOne(filter);
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllBooks = async (req, res) => {
  let query = {};
  if (req.query?.category) {
    query = { category: req.query.category };
  }
  try {
    const result = await Book.find(query);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBookById = async (req, res) => {
  const id = req.params.id;

  // Validate the ID format
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid book ID format" });
  }

  const filter = { _id: new ObjectId(id) };

  try {
    const result = await Book.findOne(filter);
    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const searchBooks = async (req, res) => {
  const query = req.query.q;
  try {
    const books = await Book.find({
      $or: [
        { bookTitle: { $regex: query, $options: "i" } },
        { authorName: { $regex: query, $options: "i" } },
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  uploadBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
  searchBooks,
};