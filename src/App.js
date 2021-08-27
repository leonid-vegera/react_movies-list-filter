import React, { PureComponent } from 'react';
import './App.scss';
import moviesFromServer from './api/movies.json';
import { SearchMarkup } from './components/SearchMarkup';

export class App extends PureComponent {
  render() {
    return (
      <div className="page">
        <div className="page-content">
          <SearchMarkup movies={moviesFromServer} />
        </div>
        <div className="sidebar">
          Sidebar goes here
        </div>
      </div>
    );
  }
}
