import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  render() {
    return <ul>
      <li>Movie 1</li>
      <li>Movie 2</li>
      <li>Movie 3</li>
      </ul>
  }
}

module.exports = SearchResultList;
