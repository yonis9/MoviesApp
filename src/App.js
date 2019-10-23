import React, { Component } from 'react';
import SearchField from './SearchField'
import Cardlist from './Cardlist'
import './App.css';
import Navigation from './Navigation';
import UpcomingMovies from './UpcomingMovies';
import PopularMovies from './PopularMovies';
import SearchPage from './SearchPage'
import Movie from './Movie';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
require('dotenv').config();

class App extends Component {
  constructor () {
    super()
    this.state = {
      searchInput: 'batman',
      moviesSearch: [],
      popularMovies: [],
      upcomingMovies: []
    }
  }

  componentDidMount () {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(response => response.json())
    .then(data => {
      this.setState({ popularMovies: data.results})
    })
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
    .then(response => response.json())
    .then(data => {
      this.setState({ upcomingMovies: data.results})
    })
  }

  componentDidUpdate(prevprops, prevstate) {
    if (this.state.searchInput !== '' && prevstate.searchInput !== this.state.searchInput){
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchInput}&page=1`)
      .then(response => response.json())
      .then(data => {
        this.setState({ moviesSearch: data.results})
      })
    }
  }

  onInputChange = (e) => {
    this.setState({ searchInput: e.target.value })
  }



  
  render () {
    const { moviesSearch, popularMovies,upcomingMovies, route } = this.state;
    return (
      <Router>
        <div>
          <Navigation />
          <h1>Movies App</h1>

          <Switch>
            <Route path='/MoviesApp/' exact render={(routeProps) => (<UpcomingMovies {...routeProps} upcomingMovies={upcomingMovies} />)} />
          <Route path='MoviesApp/search' render={(routeProps) => (<SearchPage {...routeProps} onInputChange={this.onInputChange} data={moviesSearch} />)} />
          <Route path='MoviesApp/popular' render={(routeProps) => (<PopularMovies {...routeProps}popularMovies={popularMovies} />)} />
          <Route path='MoviesApp/movie/:id' render={(routeProps) => (<Movie {...routeProps} />)} />
        </Switch>
       </div>
      </Router>
    );
  }
}

export default App;
