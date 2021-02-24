import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'postDetail',
  initialState: {
    url: '',
    isLoading: false,
    post: {
      title: '',
      user: '',
      body: '',
      image: '',
      link: '',
      subreddit: '',
    },
    comments: [],
  },
  reducers: {
    loadPost: (state, action) => {
      state.post = action.payload;
    },
    loadComments: (state, action) => {
      state.comments = action.payload;
    },
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    resetSlice: (state, action) => {
      state.post = {};
      state.comments = {hello: 1,};
    },
  }
}

const postDetailSlice = createSlice(options);

export const { loadPost } = postDetailSlice.actions;
export default postDetailSlice.reducer;