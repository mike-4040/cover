const express = require('express');

const controllers = require('./controllers/books');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => res.send('Hello World!'));

app.get('/books', controllers.getAllBooks);
app.get('/books/:author_id', controllers.getBooksByAuthor);
app.get('/authors', controllers.getAllAuthors);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
