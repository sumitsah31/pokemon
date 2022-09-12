import React from 'react';
import Pokemonlist from './components/Pokemonlist';
import Navbar from './components/Navbar';
import './components/style.css'
function App() {
  return (
    <>
    <Navbar/>
      <Pokemonlist/>
    </>
  );
}

export default App;