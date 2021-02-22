import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'newsFeed',
  initialState: {
    activeSubreddit: 'Homepage',
    searchTerm: '',
    posts: {},
    pageNumber: 1,
    after: '',
    before: [],
    isLoading: false,
  },
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.after = action.payload.after;
      state.before = action.payload.before;
    },
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  }
}

const newsFeedSlice = createSlice(options);

export const { loadPosts } = newsFeedSlice.actions;
export default newsFeedSlice.reducer;