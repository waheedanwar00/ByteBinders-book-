const express = require("express");
const cors = require("cors");
const {
  uploadBook,
  updateBook,
  deleteBook,
  getAllBooks,
  getBookById,
  searchBooks,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/upload-book", uploadBook);
router.patch("/book/:id", updateBook);
router.delete("/book/:id", deleteBook);
router.get("/all-books", getAllBooks);
router.get("/book/:id", getBookById);
router.get("/search", searchBooks);
module.exports = router;
