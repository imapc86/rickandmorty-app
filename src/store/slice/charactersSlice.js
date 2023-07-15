import { createSlice } from '@reduxjs/toolkit';

export const charactersSlice = createSlice({
  name: 'characters',
    initialState: {
      characterToSearch: '',
      count: 0,
      currentPage: 0,
      totalPages:0,
      nextPage: null,
      prevPage: null,
      characters: [],
      isLoading: false,
      isError: false,
    },
    reducers: {
      startLoading: (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.characters = [];
        state.characterToSearch = action.payload;
      },
      setCharacters: (state, action) =>{
        state.count = action.payload.count;
        state.currentPage = action.payload.currentPage;
        state.totalPages = action.payload.totalPages;
        state.nextPage = action.payload.nextPage;
        state.prevPage = action.payload.prevPage;
        state.characters = action.payload.characters;
        state.isLoading = false;
        state.isError = false;
      },
      setError:(state) =>{
        state.isLoading = false;
        state.isError = true;
      }
    }
});


export const { startLoading, setCharacters, setError } = charactersSlice.actions;