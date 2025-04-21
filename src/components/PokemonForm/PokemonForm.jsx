// src/components/PokemonForm/PokemonForm.jsx

// 1. Import dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 2. Define the initial form state
const initialState = {
  name: '',
  weight: 0,
  height: 0,
};

// 3. Define the component
const PokemonForm = (props) => {
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate(); // 3.1 Setup programmatic navigation

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addPokemon(formData);
    setFormData(initialState); // 3.2 Clear form after submit
    navigate('/pokemon'); // 3.3 Redirect to Pokemon list
  };

  // 4. Return JSX
  return (
    <main>
      <h2>New Pokemon</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

// 5. Export the component
export default PokemonForm;
