import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const rickAndMortyApi = createSlice({
  name: "rickandmorty",
  initialState: {
    characters: [],
    loading: false,
    number: 0,
    page: 1,
  },
  reducers: {
    moreCharactersList: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
    },
    loadingCharacters: (state, action) => {
      state.loading = action.payload;
    },
    getSomeCharactersList: (state, action) => {
      state.characters = [...state.characters, ...action.payload];
    },
    updateNumber: (state, action) => {
      state.number = action.payload;
    },
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    setList: (state) => {
      state.characters = [];
    },
  },
});

export const {
  moreCharactersList,
  updateNumber,
  updatePage,
  loadingCharacters,
  getSomeCharactersList,
  setList,
} = rickAndMortyApi.actions;

export default rickAndMortyApi.reducer;

export const moreCharacters =
  (prevNumberSlice, numberSlice, page) => (dispatch) => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((res) => {
        dispatch(loadingCharacters(true));
        dispatch(
          moreCharactersList(
            res.data.results.slice(prevNumberSlice, numberSlice)
          )
        );
      })
      .finally(() => dispatch(loadingCharacters(false)))
      .catch((err) => console.log(err));
  };

export const getSomeCharacters =
  (prevNumberSlice, numberSlice, page, name, countCharacters) => (dispatch) => {
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
      )
      .then((res) => {
        if (res.data.info.count === countCharacters) {
          null;
        } else {
          dispatch(
            getSomeCharactersList(
              res.data.results.slice(prevNumberSlice, numberSlice)
            )
          );
        }
      })
      .catch((err) => console.log(err));
  };

export const updateNumberSlice = (number) => (dispatch) => {
  dispatch(updateNumber(number));
};

export const updatePageMain = (number) => (dispatch) => {
  dispatch(updatePage(number));
};
