import {createSlice} from '@reduxjs/toolkit';

const initialState = [
  {id: '1', Name: 'John'},
  {id: '2', Name: 'BharatJi'},
  {id: '3', Name: 'Upadya ji'},
];

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectAllUser = state => state.Users;
export default userSlice.reducer;
