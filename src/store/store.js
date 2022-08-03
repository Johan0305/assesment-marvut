import { configureStore } from "@reduxjs/toolkit";
//Reducers
import charactersRickandMorty from "../features/apiRandM/rickandmorty";

export const store = configureStore({
  reducer: { charactersRickandMorty },
});
