import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import pokedexReducer from '../features/Pokedex/pokedexSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokedexReducer: pokedexReducer
  },
});
