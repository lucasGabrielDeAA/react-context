import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import './styles.css';

import { Movie } from './components';

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div className="container">
      {movies.map(movie => <Movie data={movie} />)}
    </div>
  );
}

export default MoviesList;
