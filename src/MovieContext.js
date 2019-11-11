import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    { id: Math.random(), title: 'Lord of the rings - The fellowship of the ring', price: 20 },
    { id: Math.random(), title: 'Avengers - Endgame', price: 35 },
    { id: Math.random(), title: 'Star wars - Return of Jedi', price: 25 },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  )
}

