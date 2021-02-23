import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'subredditSubscriber',
  initialState: {
    searchQuery: '',
    subreddits: [],
    isLoading: false,
    pageNumber: 1,
    before: '',
    after: '',
  },
  reducers: {
    loadSubreddits: (state, action) => {
      state.subreddits = action.payload.subreddits;
      state.after = action.payload.after;
      state.before = action.payload.before;
      console.log(state.subreddits)
    },
    changeIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    changeSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    changePageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
  }
}

const subredditSubscriberSlice = createSlice(options);

export const { loadSubreddits } = subredditSubscriberSlice.actions
export default subredditSubscriberSlice.reducer;