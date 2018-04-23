import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      limit: 10
    }
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(event) {
    let input = event.target.value;
    this.setState({userInput: input});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('SearchForm input= ', this.state.userInput);
    this.props.search(this.state.userInput);
  }

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" 
      onChange={this.updateInput}
      value={this.state.userInput} 
      placeholder="Search Movies" />
      <button>Search</button>
    </form>
  }
}

module.exports = SearchForm;
