import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';

class App extends React.PureComponent {

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  // only care about the part of the global state that this
  // component actually needs
  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  }

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState);
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
      const searchRegex = new RegExp(searchTerm, 'i');
      articles = pickBy(articles, ({title, body}) => {
        return title.toLowerCase().match(searchRegex) ||
          body.toLowerCase().match(searchRegex);
      });
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <hr/>
        <ArticleList articles={articles} />
      </div>
    );
  }
}

export default App;
