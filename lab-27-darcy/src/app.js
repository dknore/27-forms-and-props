import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './components/searchForm.js';
import SearchResultList from './components/searchResultList.js';
// import './style/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Reddit Search Engine',
      results: [],
    }
    this.performSearch = this.performSearch.bind(this);
  }

  performSearch(query) {
    let url = `https://www.reddit.com/r/` + query + '.json?limit=' + query.limit

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(json => {
        let content = json.data.children;
        this.setState({results: content })
        console.log('content.length= ', content.length);
      })
      
    // if (query === 'ttt') {
    //   this.setState({ results: ["Kill Bill vol I", "Kill Bill vol II"] });
    // } else {
    //   this.setState({ results: [] });
    // }
  }

  render() {
    return <div>
      <h1>{this.state.title}</h1>
      <SearchForm search={this.performSearch} />
      <SearchResultList results={this.state.results} />
    </div>
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(<App />, root);