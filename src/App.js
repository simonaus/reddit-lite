import './App.css';
import React from 'react';
import { Header } from './features/Header';
import { SubredditList } from './features/subredditlist/SubredditList';
import { NewsFeed } from './features/newsfeed/NewsFeed';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SubredditSubcriber } from './features/newsfeed/SubredditSubscriber';


function App() {

  const fetchReddit = async () => {
    const response = await fetch('https://www.reddit.com/r/space/comments/lnmo9p/perseverance_hazard_camera_photos_with_covers/.json');
    const responseJSON = await response.json();
    console.log(responseJSON[1].data.children[4].data.body);
  }

  return (
    <Router>
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <SubredditList className="SubredditList" />
          <Route path='/' exact component={NewsFeed} />
          <Route path='/' exact component={SubredditSubcriber} />
        </main>
      </div>
    </Router>
  );
}

export default App;
