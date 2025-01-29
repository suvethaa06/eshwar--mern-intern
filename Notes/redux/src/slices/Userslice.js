import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const Userslice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser : (state, action) => {
        state.users = [...state.users, action.payload];
    },
  },
});

export const { addUser } = Userslice.actions;

export default Userslice.reducer;