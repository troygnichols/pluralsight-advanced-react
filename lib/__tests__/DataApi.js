import StateApi from 'state-api';
import data from '../testData';

const store = new StateApi(data);

describe('StateApi', () => {

  it('can get articles from state', () => {
    const articles = store.getState().articles;
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('can get authors from state', () => {
    const authors = store.getState().authors;
    const authorId = data.authors[0].id;
    const authorTitle = data.authors[0].title;

    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].title).toBe(authorTitle);
  });

});
