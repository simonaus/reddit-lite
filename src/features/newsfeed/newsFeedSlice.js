import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'newsfeed',
  initialState: {
    activeSubreddit: 'Homepage',
    searchTerm: '',
    posts: {
      a1: {
        title: 'Post test a1',
        subredditName: 'r/worldnews',
        img: '',
        votes: 100,
      },
      a2: {
        title: 'Post test a2',
        subredditName: 'r/worldnews',
        img: '',
        votes: 200,
      },
      a3: {
        title: 'Post test a3',
        subredditName: 'r/askreddit',
        img: '',
        votes: 54374,
      },
    }
  },
  reducers: {
    loadPosts: (state, action) => {
      state.posts = action.payload;
    }
  }
}

const newsFeedSlice = createSlice(options);

export const { loadPosts } = newsFeedSlice.actions;
export default newsFeedSlice.reducer;