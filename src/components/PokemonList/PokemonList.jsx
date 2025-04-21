// src/components/PokemonList/PokemonList.jsx

// 1. Import Link from React Router
import { Link } from 'react-router-dom';

// 2. Define the component
const PokemonList = (props) => {
  return (
    <>
      <h2>Pokemon</h2>
      <ul>
        {props.pokemon.map((currentPokemon) => (
          <li key={currentPokemon.name}>
            <Link to={`/pokemon/${currentPokemon._id}`}>
              {currentPokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// 3. Export the component
export default PokemonList;
