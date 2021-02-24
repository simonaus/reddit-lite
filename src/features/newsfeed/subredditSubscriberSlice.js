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
    isToggle: false,
  },
  reducers: {
    loadSubreddits: (state, action) => {
      state.subreddits = action.payload.subreddits;
      state.after = action.payload.after;
      state.before = action.payload.before;
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
    toggle: (state, action) => {
      state.isToggle = !state.isToggle;
    },
    toggleOff: (state, action) => {
      state.isToggle = false;
    },
  }
}

const subredditSubscriberSlice = createSlice(options);

export const { loadSubreddits } = subredditSubscriberSlice.actions
export default subredditSubscriberSlice.reducer;