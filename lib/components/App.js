import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

class App extends React.Component {

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  state = this.props.store.getState();

  setSearchTerm = (searchTerm) => {
    this.setState({searchTerm});
  };

  render() {
    let {articles, searchTerm} = this.state;

    if (searchTerm) {
      const lowercaseTerm = searchTerm.toLowerCase();
      articles = pickBy(articles, ({title, body}) => {
        return title.toLowerCase().match(lowercaseTerm) ||
          body.toLowerCase().match(lowercaseTerm);
      });
    }

    return (
      <div>
        <SearchBar doSearch={this.setSearchTerm} />
        <hr/>
        <ArticleList
          articles={articles}
          store={this.props.store}/>
      </div>
    );
  }
}

export default App;
