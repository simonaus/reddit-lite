import './App.css';
import React from 'react';
import { Header } from './features/Header';
import { SubredditList} from './features/subredditlist/SubredditList';
import { SearchBar } from './features/SearchBar';
import { NewsFeed } from './features/newsfeed/NewsFeed';


function App() {

  const fetchReddit = async () => {
    const response = await fetch('https://www.reddit.com/r/space/comments/lnmo9p/perseverance_hazard_camera_photos_with_covers/.json');
    const responseJSON = await response.json();
    console.log(responseJSON[1].data.children[4].data.body);
  }

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SubredditList className="SubredditList" />
        <NewsFeed className ='NewsFeed' />
      </main>
    </div>
  );
}

export default App;
