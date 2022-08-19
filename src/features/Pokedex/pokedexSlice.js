import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokemonCaught: Array(151),
    pokemonSeen: []
}

export const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        addSeen: (state, action) => {
            state.pokemonSeen.push(action.payload); // action payload should contain id and img src
        },
        addCaught: (state, action) => {
            state.pokemonCaught[action.payload.id] = action.payload; 
            // action payload should contain id, img src, stats {hp, attack, defense, special-attack, special-defense, speed, psychic}
        },
        trainPokemon: (state, action) => {
            // action payload contains new state and pokemon id
            let id = action.payload.id;
            state.pokemonCaught[id].stats = action.payload.stats; 
        }
    }
})

export const { addSeen, addCaught, trainPokemon } = pokedexSlice.actions;

export const selectSeen = (state) => state.pokedexReducer.pokemonSeen;
export const selectCaught = (state) => state.pokedexReducer.pokemonCaught;
export const selectFilterCaught = (state, searchTerm) => state.pokedexReducer.pokemonCaught.filter(element => element.name.includes(searchTerm));
export const selectFilterId = (state, pokeId) => state.pokedexReducer.pokemonCaught.filter(element => element.id === pokeId)

export default pokedexSlice.reducer;