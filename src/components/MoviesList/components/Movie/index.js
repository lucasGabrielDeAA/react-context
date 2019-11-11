import React from 'react';

function Movie({ data }) {

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{`R$ ${data.price}`}</p>
    </div>
  )
}

export default Movie;
