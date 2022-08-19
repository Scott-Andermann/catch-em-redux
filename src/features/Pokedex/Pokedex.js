import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectFilterCaught, trainPokemon } from "./pokedexSlice";
import PokedexSearch from "./PokedexSearch";
import Card from './Card';
import ZoomCard from './ZoomCard';
import './Pokedex.css';


const Pokedex = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [pokeId, setPokeId] = useState(0);

    const pokemonCaught = useSelector((state) => selectFilterCaught(state, searchTerm));

    return (
        <div>
            <h2>Pokedex</h2>
            <PokedexSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='card-deck'>
            {Object.keys(pokemonCaught).length !== 0 &&
                pokemonCaught.map(pokemon => 
                    (<Card key={pokemon.id} pokemon={pokemon} setPokeId={setPokeId}/>)
                )
            }
            {pokeId > 0 && <ZoomCard pokeId={pokeId} setPokeId={setPokeId}/>}
            </div>
        </div>
    )
}

export default Pokedex;