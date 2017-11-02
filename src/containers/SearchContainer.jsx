import React from 'react';
import axios from 'axios';
import SearchBox from '../components/SearchBox';
import SearchResult from '../components/SearchResult';


export default class SearchContainer extends React.Component{

  constructor(props){
    super(props)
    this.state={
      searchValue: '',
      movieResult : [],
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      searchValue: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    axios.get('http://www.omdbapi.com/?apikey=20dac387&s='+this.state.searchValue)
      .then((movie) => {
        this.setState({
          movieResult: movie.data.Search,
        })
      }
    )}

  render(){
    return(
      <div>

        <SearchBox
        value={this.state.searchValue}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />

        <SearchResult
        movieResult={this.state.movieResult}
        />

      </div>
    );
  }
}
