import React from 'react';

import './styles.css';

function Movie({ data }) {
  return (
    <div className="movie">
      <p className="title">{data.title}</p>
      <p className="price">{`R$ ${data.price}`}</p>
    </div>
  )
}

export default Movie;
