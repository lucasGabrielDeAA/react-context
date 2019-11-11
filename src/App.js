import React from 'react';
import './App.css';

import { MoviesList, Nav } from './components';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <Nav />

      <div className="App">
        <MoviesList />
      </div>
    </MovieProvider>
  );
}

export default App;
