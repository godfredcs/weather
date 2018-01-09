import React, { Component } from 'react';
import './assets/css/bootstrap.min.css';
import './App.css';

import SearchBar from './containers/search_bar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
