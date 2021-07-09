# Reddit-lite

## Table of contents
- [Introduction](#Introduction)
- [Getting Started](#Getting-Started)
- [Features](#Features)
- [Future Features](#Future-Features)
- [Technologies](#Technologies)

## Introduction
Reddit-lite is a single-page web application allows users to utilise the Reddit JSON API to access and search through Reddit user data and uploads.

Reddit is a hugely popular website, where users upload text, photos, videos and links which can be discussed and commented on by other users. The site is organised into discreet topical forums which are called subreddits. Subreddit titles are denoted with an 'r/' symbol, eg. 'r/worldnews'. Furthermore, all posts and comments can be up/downvoted, meaning all content can be quickly assess or filtered by its quality and relevance.

Using reddit-lite, it is possible to access a portion of the data uploaded by users onto the reddit servers. By excluding various functionalities available on the official site (eg. posting capabilities, awards, user profiles), reddit-lite provides a more streamlined view of the core content which reddit makes available.

![image](https://user-images.githubusercontent.com/66684013/125090047-d82e6e00-e0c6-11eb-9bce-077e2d9fc932.png)

## Getting Started

Access reddit-lite here: https://simonaus.github.io/reddit-lite/

## Features

- Presents posts on reddit homepage
- Homepage can be filtered by key terms using the search bar
- Subreddits can be search for by title
- Access to the newsfeed of any subreddit (also filterable by key terms)
- Subreddits can be 'subscribed' to, meaning they will appear for quick access in the side navigation bar
- Subreddits can be 'unsubscribed' from
- Individual posts can be selected and loaded
- User comments are presented using markdown formatting
- Replies to user comments can be hidden/displayed allowing users to 'dig-down' into replies of replies
- Total score (the total of up/downvotes) for each post and comment is presented
- Widely accessable from desktop and mobile web browsers

## Future Features

- Videos can be loaded and played
- UI animations (eg. for loading and display of content)
- Fix bug with replaceAll() function causing error on IE and Samsung Internet

## Technologies

- node.js v15.5.1
- Visual Studio Code v1.52.1
- git v2.25.1
- javaScript 1.8.5
- CSS3
- HTML5
- react 17.0.1
- redux 4.0.5
- @reduxjs/toolkit 1.5.0
- react-dom 17.0.1
- react-markdown 5.0.3
- react-redux 7.2.2
- react-router-dom 5.2.0
- react-scripts 4.0.2
- web-vitals 1.1.0


