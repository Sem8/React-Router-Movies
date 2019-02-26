import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
// import movieData from './server.js';

import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  // componentDidMount() {
  //   this.setState({ savedList: movieData })
  // }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <div> Movie List should be rendered below
          
          <Route path='/' exact component={MovieList} />
          <Route path='/movies/:id' component={Movie} />

        </div>
      </div>
    );
  }
}
