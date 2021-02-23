const { authors, books } = require('../data/data');

exports.getAllBooks = (_req, res) => res.status(200).send(books);

exports.getBooksByAuthor = (req, res) => {
  const req_author_id = Number(req.params.author_id);
  if( req_author_id > 100) {
    console.log('Never run')
  }
  const book_of_author = books.filter(
    ({ author_id }) => author_id === req_author_id
  );
  res.status(200).send(book_of_author);  
}

exports.getAllAuthors = (_req, res) => res.status(200).send(authors);
