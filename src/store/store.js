import { configureStore } from '@reduxjs/toolkit'
import { charactersSlice, characterSlice } from './slice'

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    character: characterSlice.reducer
  },
})