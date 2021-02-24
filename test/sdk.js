const axios = require("axios");

const port = process.env.PORT || 3000;

const base_url = `http://localhost:${port}`;

exports.get_books_by_author = async (author_id) => await axios.get(`${base_url}/books/${author_id}`);

exports.get_all_books = async () => await axios.get(`${base_url}/books`);
