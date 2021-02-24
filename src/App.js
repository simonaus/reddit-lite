import './App.css';
import React from 'react';
import { Header } from './features/Header';
import { SubredditList } from './features/subredditlist/SubredditList';
import { NewsFeed } from './features/newsfeed/NewsFeed';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SubredditSubscriber } from './features/newsfeed/SubredditSubscriber';
import { PostDetail } from './features/postdetail/PostDetail';
import store from './store';
import { useSelector } from 'react-redux';

function App() {

  const handleClick = () => {
    store.dispatch({
      type: 'subredditList/toggle',
    })
    store.dispatch({
      type: 'subredditSubscriber/toggle',
    })
    store.dispatch({
      type: 'newsFeed/toggle',
    })
    store.dispatch({
      type: 'postDetail/toggle',
    })
  }

  const state = useSelector( state => state);

  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <input type="image" className="toggleButton" onClick={handleClick} src={(store.getState().subredditList.isToggle) ? "iconfinder_Close_Icon_Dark_1398917.png" : "iconfinder_magnifying-glass-zoom-in-plus_3643761.png"} />
          <SubredditList className="SubredditList" />
          <Route path='/' exact component={NewsFeed} />
          <Route path='/subredditsubscriber' exact component={SubredditSubscriber} />
          <Route path='/postdetail' exact component={PostDetail} />
        </main>
      </div>
    </Router>
  );
}

export default App;
