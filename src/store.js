import { configureStore } from '@reduxjs/toolkit';
import newsFeedReducer from './features/newsfeed/newsFeedSlice';
import subredditSubscriberReducer from './features/newsfeed/subredditSubscriberSlice';
import subredditListReducer from './features/subredditlist/subredditListSlice';
import postDetailReducer from './features/postdetail/postDetailSlice';

export default configureStore({
  reducer: {
    newsFeed: newsFeedReducer,
    subredditSubscriber: subredditSubscriberReducer,
    subredditList: subredditListReducer,
    postDetail: postDetailReducer,
  }
})


