import React from 'react';

const Card = ({ pokemon, setPokeId }) => {
    return (
        <div className='card' onClick={() => setPokeId(pokemon.id)}>
            <h2>{pokemon.name}</h2>
            <img src={pokemon.src} alt={pokemon.name} />
            <p>Pokedex Number: {pokemon.id}</p>
        </div>
    )

}

export default Card;
