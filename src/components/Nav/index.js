import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import './styles.css';

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav className="nav">
      <p>Technus's movies list</p>
      <p>{`Total (${movies.length})`}</p>
    </nav>
  )
}

export default Nav;
