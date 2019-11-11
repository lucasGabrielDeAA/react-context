import React from 'react';

import { Container, Title, Price } from './styles';

function Movie({ data }) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Price>{`R$ ${data.price}`}</Price>
    </Container>
  )
}

export default Movie;
