import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFilterCaught, trainPokemon } from "./pokedexSlice";
import PokedexSearch from "./PokedexSearch";


const Pokedex = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const pokemonCaught = useSelector((state) => selectFilterCaught(state, searchTerm));
    console.log(pokemonCaught);

    const train = (pokemon) => {
        console.log(pokemon.stats);
        const newStats = []
        pokemon.stats.map(element =>
            newStats.push({name: element.name, stat: element.stat + Math.ceil(Math.random() * Math.random() * 5)})
        );
        console.log(pokemon.id, newStats)
        dispatch(trainPokemon({id: pokemon.id, stats: newStats}))
    }

    return (
        <div>
            <h2>Pokedex</h2>
            <PokedexSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            {Object.keys(pokemonCaught).length !== 0 &&
                pokemonCaught.map(pokemon => (
                    <div>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.src} alt={pokemon.name}/>
                        <h4>Stats</h4>
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
                        <button type='button' onClick={() => train(pokemon)}>Give Rare Candy</button>

                    </div>
                ))
            }
        </div>
    )
}

export default Pokedex;