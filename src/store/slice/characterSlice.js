import { createSlice } from '@reduxjs/toolkit';

export const characterSlice = createSlice({
  name: 'character',
    initialState: {
      character: {},
      isLoading: false,
      isError: false,
    },
    reducers: {
      characterLoading: (state) => {
        state.isLoading = true;
        state.isError = false;
        state.character = {};
      },
      setCharacter: (state, action) =>{
        state.isLoading = false;
        state.isError = false;
        state.character = action.payload;
      },
      characterError:(state) =>{
        state.isLoading = false;
        state.isError = true;
      }
    }
});


export const { characterLoading, setCharacter, characterError} = characterSlice.actions;