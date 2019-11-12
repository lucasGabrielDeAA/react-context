import React, { useState, createContext, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    const data = await localStorage.getItem('@movies:list');

    if (data !== null) {
      setMovies(JSON.parse(data));
    }
  }

  async function handleMovies(movie) {
    const data = [ ...movies, movie ];

    localStorage.setItem('@movies:list', JSON.stringify(data));
    setMovies(data);
  }

  return (
    <MovieContext.Provider value={[movies, handleMovies]}>
      {children}
    </MovieContext.Provider>
  )
}

