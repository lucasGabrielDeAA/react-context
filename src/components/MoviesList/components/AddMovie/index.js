import React, { useState, useContext } from 'react';

import { MovieContext } from '../../../../MovieContext';

import { Container, Input, Button } from './styles';

function AddMovie() {
  const [movies, setMovies] = useContext(MovieContext);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  function addMovie(e) {
    e.preventDefault();

    if (title !== '' && price !== '') {
      setMovies(prevMovies => [...prevMovies, { id: Math.random(), title, price }]);
    }
  }

  return (
    <Container onSubmit={addMovie}>
      <Input
        type="text"
        name="title"
        placeholder="Movie's title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Input
        type="number"
        step="1"
        name="price"
        placeholder="Movie's price"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />

      <Button type="submit">+ add movie</Button>
    </Container>
  )
}

export default AddMovie;
