// /* eslint-disable */
import React from 'react';
import propTypes from 'prop-types';

import { MoviesList } from '../MoviesList';

export class SearchMarkup extends React.Component {
  state = {
    query: '',
  };

  handleChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  }

  render() {
    const { movies } = this.props;
    const { query } = this.state;
    const filteredFilms = movies.filter(
      film => (film.title.toLowerCase()).includes(query)
        || (film.description.toLowerCase()).includes(query),
    );

    return (
      <>
        <div className="box">
          <div className="field">
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={this.state.query}
                onChange={this.handleChange}

              />
            </div>
          </div>
        </div>

        <MoviesList movies={filteredFilms} />
      </>
    );
  }
}

SearchMarkup.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
    }),
  ),
};

SearchMarkup.defaultProps = {
  movies: [],
};
