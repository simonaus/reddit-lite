import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'subredditSubscriber',
  initialState: {
    searchTerm: '',
    subreddits: {
      id45243: {
        name: 'r/worldnews',
        numOfSubscribers: 1200003,
      },
      id45243: {
        name: 'r/askreddit',
        numOfSubscribers: 12042303,
      },
      id45243: {
        name: 'r/jokes',
        numOfSubscribers: 56003,
      },
    }
  },
  reducers: {
    loadSubreddits: (state, action) => {
      state.subreddits = action.payload;
    }
  }
}

const subredditSubscriberSlice = createSlice(options);

export const { loadSubreddits } = subredditSubscriberSlice.actions
export default subredditSubscriberSlice.reducer;