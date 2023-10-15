import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = ''

const filterSlise = createSlice({
    name: 'filter',
    initialState: initialStateFilter,
    reducers: {
      filterContacts(_, action) {
        return action.payload;
      },
    },
  });
  
  export const { filterContacts } = filterSlise.actions;
  export const filterReducer = filterSlise.reducer;