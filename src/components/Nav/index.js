import React, { useContext } from 'react';

import { MovieContext } from '../../MovieContext';

import './styles.css';

function Nav() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav className="nav">
      <div>
        <p>Technus's movies list</p>
        <p>{`Total (${movies.length})`}</p>
      </div>
    </nav>
  )
}

export default Nav;
