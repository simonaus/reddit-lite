import { createSlice } from '@reduxjs/toolkit';

const options = {
  name: 'postDetail',
  initialState: {
    title: 'My first posts',
    user: 'gerry',
    body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ',
    comments: {
      fsjnvf55: {
        user: 'gerrys friend',
        body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ',
        votes: 1002,
        children: {
          srrrvn35: {
            user: 'childrencomment',
            body: 'body body body body body body body body body body body body body body body body body body body body body body body ',
            votes: 2484,
            children: {},
          },
        },
      },
      fsjneee66: {
        user: 'gerrys friend',
        body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ',
        votes: 1002,
        children: {
          srrrvn35: {
            user: 'childrencomment',
            body: 'body body body body body body body body body body body body body body body body body body body body body body body ',
            votes: 2484,
            children: {},
          },
        },
      },
      fsj335y655: {
        user: 'gerrys friend',
        body: 'body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body body ',
        votes: 1002,
        children: {
          srrrvn35: {
            user: 'childrencomment',
            body: 'body body body body body body body body body body body body body body body body body body body body body body body ',
            votes: 2484,
            children: {},
          },
        },
      },
    }
  },
  reducers: {
    loadPost: (state, action) => {
      state = action.payload;
    }
  }
}

const postDetailSlice = createSlice(options);

export const { loadPost } = postDetailSlice.actions;
export default postDetailSlice.reducer;