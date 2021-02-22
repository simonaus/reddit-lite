import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'subredditList',
  initialState: {
    subreddits: [
      {id: 'ad454', name: 'r/worldnews'},
      {id: 'f55', name: 'r/funny'},
      {id: 'vfjn899', name: 'r/askreddit'},
    ],
    isToggle: false,
  },
  reducers: {
    addSubreddit: (state, action) => {
      state.subreddits.push(action.payload);
    }
  }
}

const subredditListSlice = createSlice(options);

export const { addSubreddit } = subredditListSlice.actions;
export default subredditListSlice.reducer;