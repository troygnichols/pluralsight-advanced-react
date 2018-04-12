import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends PureComponent {

  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300)

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value}, () => {
      this.doSearch();
    });
  }

  // shouldComponentUpdate() {
  //   return true;
  // }

  componentWillUpdate() {
    console.log('updating searchbar');
  }

  render() {
    return (
      <input
        type="text"
        style={styles.search}
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
        autoFocus={true}
      />
    );
  }
}

const styles = {
  search: {
    margin: '.3em 0',
  },
};

export default storeProvider()(SearchBar);
