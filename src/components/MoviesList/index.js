import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import { Container, Title, Content, List } from './styles';

import { AddMovie, Movie } from './components';

function MoviesList() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container>
      <Title>Movies</Title>

      <Content>
        <AddMovie />

        <List>
          {movies.map(movie => (
            <Movie key={movie.id} data={movie} />
          ))}
        </List>
      </Content>
    </Container>
  );
}

export default MoviesList;
