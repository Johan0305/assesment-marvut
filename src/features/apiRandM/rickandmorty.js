import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const rickAndMortyApi = createSlice({
  name: "rickandmorty",
  initialState: {
    characters: [],
    loading: false,
  },
  reducers: {
    setCharacterList: (state, action) => {
      state.characters = action.payload.slice(0, 8);
    },
  },
});

export const { setCharacterList } = rickAndMortyApi.actions;

export default rickAndMortyApi.reducer;

export const fetchAllCharacters = () => (dispatch) => {
  axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => dispatch(setCharacterList(res.data.results)))
    .catch((err) => console.log(err));
};
