import React, { Component } from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends Component {

  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300)

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value}, () => {
      this.doSearch();
    });
  }

  render() {
    return (
      <input type="text" placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch} />
    );
  }
}

export default SearchBar;
