const axios = require('axios');

exports.get_books_by_author = async (author_id) =>
  await axios.get(`http://localhost:3000/books/${author_id}`);
