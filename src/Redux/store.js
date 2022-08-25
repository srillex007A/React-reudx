import {configureStore} from '@reduxjs/toolkit';
import postSlice from './feature/postSlice';

export default configureStore({
  reducer: {
    Post: postSlice,
  },
});
