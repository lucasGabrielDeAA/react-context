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
        <List>
          {movies.map(movie => (
            <Movie key={movie.id} data={movie} />
          ))}
        </List>

        <AddMovie />
      </Content>
    </Container>
  );
}

export default MoviesList;
