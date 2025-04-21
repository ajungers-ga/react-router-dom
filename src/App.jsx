// src/App.jsx

// 1. Import dependencies and components
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import PokemonForm from './components/PokemonForm/PokemonForm'; // 1.4 Import PokemonForm
import NavBar from './components/NavBar/NavBar';

// 2.1 Define data and state
const initialState = [
  { _id: 1, name: 'bulbasaur', weight: 69, height: 7 },
  { _id: 2, name: 'ivysaur', weight: 130, height: 10 },
  { _id: 3, name: 'venusaur', weight: 1000, height: 20 },
  { _id: 4, name: 'charmander', weight: 85, height: 6 },
  { _id: 5, name: 'charmeleon', weight: 190, height: 11 },
];

// 2.2 Define the main component
const App = () => {
  const [pokemon, setPokemon] = useState(initialState);

  // 2.3 Define a function to add new Pokemon
  const addPokemon = (newPokemonData) => {
    newPokemonData._id = pokemon.length + 1;
    setPokemon([...pokemon, newPokemonData]);
  };

  // 3. Return JSX to render routes and layout
  return (
    <>
      <NavBar />
      <h1>Pokemon!</h1>
      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/pokemon" element={<PokemonList pokemon={pokemon} />} />
        <Route path="/pokemon/new" element={<PokemonForm addPokemon={addPokemon} />} />
        <Route
          path="/pokemon/:pokemonId"
          element={<PokemonDetails pokemon={pokemon} />}
        />
        <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

// 4. Export the component
export default App;
