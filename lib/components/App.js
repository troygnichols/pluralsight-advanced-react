import React from 'react';

import DataApi from '../DataApi';
import data from '../testData';

import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }

  articleActions = {
    lookupAuthor: (article) => this.state.authors[article.authorId],

  };

  render() {
    const {articles} = this.state;
    return (
      <div>
        <ArticleList
          articles={articles}
          articleActions={this.articleActions}/>
      </div>
    );
  }
}

export default App;
