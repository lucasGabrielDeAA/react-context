import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import { Container, Content, Item } from './styles';

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <Container>
      <Content>
        <Item>Technus's movies list</Item>
        <Item>{`Total (${movies.length})`}</Item>
      </Content>
    </Container>
  )
}

export default Nav;
