const { expect } = require('chai');
const sdk = require('./sdk');

describe('get books by author id', () => {
  it('calls api', async () => {
    const { data } = await sdk.get_books_by_author(2);

    expect(data).to.be.a('array');
    expect(data.length).equal(2);
  })
});
