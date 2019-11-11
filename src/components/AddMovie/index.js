import React, { useState, useContext } from 'react';

import { MovieContext } from '../../MovieContext';

function AddMovie() {
  const [movies, setMovies] = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  function addMovie(e) {
    e.preventDefault();

    setMovies(prevMovies => [...prevMovies, { id: Math.random(), title, price }]);
  }

  return (
    <form onSubmit={addMovie}>
      <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="number" step="1" name="price" value={price} onChange={e => setPrice(e.target.value)} />

      <button type="submit">+ add movie</button>
    </form>
  )
}

export default AddMovie;
