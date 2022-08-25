import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    title: 'I love to learn redux',
    content: 'Learning redux in react ',
  },
  {id: '2', title: 'slice...', content: 'Leaning new Concept'},
];

const PostSlice = createSlice({
  name: 'Post',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, actions) {
        state.push(actions.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

// function selectAllPosts
export const selectAllPosts = state => state.Post;
// Actions
export const {postAdded} = PostSlice.actions;
export default PostSlice.reducer;
