import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';

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

  render() {
    const {articles} = this.state;
    return (
      <div>
        <ArticleList
          articles={articles}
          store={this.props.store}/>
      </div>
    );
  }
}

export default App;
