import React from 'react';
import axios from 'axios';
import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
  };

  async componentDidMount() {
    console.info('App.componentDidMount');

    // if we already have articles don't fetch them again
    if (Object.keys(this.state.articles).length) {
      console.info('Articles already loaded, not loading more');
      return;
    }

    console.info('loading articles');
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(() => ({
      articles: api.getArticles(),
      authors: api.getAuthors()
    }));
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
