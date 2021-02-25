const { expect } = require('chai');
const sdk = require('../sdk');

describe('get books by author id', () => {
  it('get only books by author', async () => {
    const { data } = await sdk.get_books_by_author(2);

    expect(data).to.be.a('array');
    expect(data.length).equal(2);
  })

  it('get only books by second author', async () => {
    const { data } = await sdk.get_books_by_author(1);

    expect(data).to.be.a('array');
    expect(data.length).equal(2);
  })
});

describe('get all books', () => {
  it('get a list of all books', async () => {
    const { data } = await sdk.get_all_books();

    expect(data).to.be.a('array');
    expect(data.length).equal(4);
  })
});
