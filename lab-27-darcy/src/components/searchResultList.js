import React from 'react';

class SearchResultList extends React.Component {
  constructor(props) {
    super(props);
  }

  movieList() {
    return this.props.results.map((result, i) => {
      return <li key={i}><a href={result.data.url}>{result.data.title}<p>{result.data.ups} Up's</p></a></li>
    })
  }

  render() {
    return <div>
      <p>Found {this.props.results.length} Movies</p>
      <ul>
        {this.movieList()}
      </ul>
    </div>
  }
}


module.exports = SearchResultList;
