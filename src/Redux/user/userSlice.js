import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: '1', Name: 'John'},
  {id: 2, Name: 'BharatJi'},
];

const userSlice = createSlice({
  name: 'user',
  reducers: {},
});

const selectAllUser = state => state.user;
export default userSlice.reducer;
