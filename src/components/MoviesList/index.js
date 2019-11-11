import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import { Container, Title, Content } from './styles';

import { Movie } from './components';

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container>
      <Title>Movies</Title>

      <Content>
        {movies.map(movie => (
          <Movie key={movie.id} data={movie} />
        ))}
      </Content>
    </Container>
  );
}

export default MoviesList;
