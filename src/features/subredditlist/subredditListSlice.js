import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'subredditList',
  initialState: {
    subreddits: [
      {urlName: '', displayName: 'Homepage'},
      {urlName: 'r/worldnews', displayName: 'r/worldnews'},
      {urlName: 'r/funny', displayName: 'r/funny'},
      {urlName: 'r/askreddit', displayName: 'r/askreddit'},
    ],
    isToggle: false,
  },
  reducers: {
    addSubreddit: (state, action) => {
      state.subreddits.push(action.payload);
    },
    removeSubreddit: (state, action) => {
      state.subreddits = state.subreddits.filter( subreddit => subreddit.urlName !== action.payload);
    },
  }
}

const subredditListSlice = createSlice(options);

export const { addSubreddit } = subredditListSlice.actions;
export default subredditListSlice.reducer;