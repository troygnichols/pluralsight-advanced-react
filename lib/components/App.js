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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

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
        <SearchBar doSearch={this.props.store.setSearchTerm} />
        <hr/>
        <ArticleList
          articles={articles}
          store={this.props.store}/>
      </div>
    );
  }
}

export default App;
