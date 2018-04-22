import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm.js';
import SearchResultList from './components/searchResultList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Reddit Search Engine',
      results: ["Kill Bill vol I", "Kill Bill vol II", "Point of No Return"]
    }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm></SearchForm>
      <SearchResultList results={this.state.results}></SearchResultList>
      </div>
  }
}

const root = document.getElementById('root');
ReactDOM.render(<App/>, root);