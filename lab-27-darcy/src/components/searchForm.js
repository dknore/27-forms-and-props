import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
  }

    render() {
      return <form>
        {this.props.title}
        <input type="text" placeholder="Search Movies"/>
        <button>Search</button>
      </form>
  }
}

module.exports = SearchForm;
