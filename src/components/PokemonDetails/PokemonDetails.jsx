// src/components/PokemonDetails/PokemonDetails.jsx

// 1. Import useParams to access dynamic URL parameters
import { useParams } from 'react-router-dom';

// 2. Define the component
const PokemonDetails = (props) => {
  const { pokemonId } = useParams(); // extract pokemonId from route
  console.log('pokemonId:', pokemonId);

  const singlePokemon = props.pokemon.find((poke) => (
    poke._id === Number(pokemonId)
  ));

  console.log('Pokemon Object:', singlePokemon);

  // 3. Return JSX to display details
  return (
    <>
      <h2>{singlePokemon.name}</h2>
      <dl>
        <dt>Weight:</dt>
        <dd>{singlePokemon.weight}</dd>
        <dt>Height:</dt>
        <dd>{singlePokemon.height}</dd>
      </dl>
    </>
  );
};

// 4. Export the component
export default PokemonDetails;

