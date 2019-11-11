import React from 'react';
import './App.css';

import { AddMovie, MoviesList, Nav } from './components';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <Nav />

      <div className="App">
        <MoviesList />

        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
