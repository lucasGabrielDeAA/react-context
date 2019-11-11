import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import './styles.css';

import { Movie } from './components';

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);

  function handleAddMovie() {
    const movie = { id: Math.random(), title: 'Batman - The dark knight', price: 50 };
  }

  return (
    <div className="container">
      <p className="title">Movies</p>

      <div className="content">
        {movies.map(movie => (
          <Movie key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
