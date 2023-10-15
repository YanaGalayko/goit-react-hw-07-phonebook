import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    isError: null,
  },
  extraReducers: {

    // FETCH
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

    // ADD
    [addContact.pending](state) {
      state.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts.push(action.payload);
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },

   // DELETE
    [deleteContact.pending](state) {
      state.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
    [deleteContact.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;



// const initialStateContacts = {
//   contacts: [],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialStateContacts,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.contacts.push(action.payload);
//       },
//       prepare(value) {
//         return {
//           payload: { id: nanoid(), ...value },
//         };
//       },
//     },
//     deleteContact: {
//       reducer(state, action) {
//         return {
//           contacts: state.contacts.filter(
//             contact => contact.id !== action.payload
//           ),
//         };
//       },
//       prepare(contactId) {
//         return {
//           payload: contactId,
//         };
//       },
//     },
//   },
// });

// const persistConfig = {
//     key: 'root',
//     storage,
//   };

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
// export const persistedReducer = persistReducer(persistConfig, contactsReducer);