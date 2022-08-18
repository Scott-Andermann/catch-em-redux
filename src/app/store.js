import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import pokedexReducer from "../features/Pokedex/pokedexSlice";
import homeReducer from "../features/Home/homeSlice";
import messagesReducer from "../features/Messages/messagesSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokedexReducer: pokedexReducer,
    homeReducer: homeReducer,
    messagesReducer: messagesReducer,
  },
});
