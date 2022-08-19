import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilterId, trainPokemon } from './pokedexSlice';

const ZoomCard = ({pokeId, setPokeId}) => {

    const pokemon = useSelector((state) => selectFilterId(state, pokeId))[0];

    const dispatch = useDispatch();

    const train = (pokemon) => {
        console.log(pokemon.stats);
        const newStats = []
        pokemon.stats.map(element =>
            newStats.push({ name: element.name, stat: element.stat + Math.ceil(Math.random() * Math.random() * 5) })
        );
        console.log(pokemon.id, newStats)
        dispatch(trainPokemon({ id: pokemon.id, stats: newStats }))
    }


    return (
        <div className='zoom-card-overlay'>
            <div className='zoom-card'>
                <h1>{pokemon.name}</h1>
                <img src={pokemon.src} alt={pokemon.name} />
                <h2>Stats</h2>
                    <table>
                        <thead>
                            {pokemon.stats.map(element => <td>{element.name}</td>)}
                        </thead>
                        <tbody>
                            <tr>
                                {pokemon.stats.map(element => <td>{element.stat}</td>)}
                            </tr>
                        </tbody>
                    </table>
                <button onClick={() => train(pokemon)}>Train</button>
                <button onClick={() => setPokeId(0)}>Close</button>
            </div>
        </div>
    )
}

export default ZoomCard;