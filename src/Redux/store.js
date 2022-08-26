import {configureStore} from '@reduxjs/toolkit';
import postSlice from './feature/postSlice';
import userReducer from './user/userSlice';

export default configureStore({
  reducer: {
    Post: postSlice,
    Users: userReducer,
  },
});
