import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'newsFeed',
  initialState: {
    searchTerm: '',
    posts: {},
    pageNumber: 1,
    after: '',
    before: [],
    isLoading: false,
    isSearching: false,
    url: 'https://www.reddit.com/.json'
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
    updateUrl: (state, action) => {
      state.url = action.payload;
    },
    changeIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
  }
}

const newsFeedSlice = createSlice(options);

export const { loadPosts } = newsFeedSlice.actions;
export default newsFeedSlice.reducer;