import React from 'react';
import { useDispatch } from "react-redux";
import { trainPokemon } from "./pokedexSlice";

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


                    // <div>
                    //     <h3>{pokemon.name}</h3>
                    //     <img src={pokemon.src} alt={pokemon.name}/>
                    //     <h4>Stats</h4>
                    //     <table>
                    //         <thead>
                    //             {pokemon.stats.map(element => <td>{element.name}</td>)}
                    //         </thead>
                    //         <tbody>
                    //             <tr>
                    //                 {pokemon.stats.map(element => <td>{element.stat}</td>)}
                    //             </tr>
                    //         </tbody>
                    //     </table>
                    //     <button type='button' onClick={() => train(pokemon)}>Give Rare Candy</button>

                    // </div>