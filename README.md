# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Mixed Messages

## Table of contents
- [Introduction](#Introduction)
- [Features](#Features)
- [Future Features](#Future Features)
- [Technologies](#Technologies)

## Introduction
Reedit-lite is a single-page web application allows users to utilise the Reddit JSON API to access and search through Reddit user data and uploads.

Reddit is a hugely popular website, where users upload text, photos, videos and links which can be discussed and commented on by other users. The site is organised into discreet topical forums which are called subreddits. Subreddit titles are denoted with an 'r/' symbol, eg. 'r/worldnews'. Furthermore, all posts and comments can be up/downvoted, meaning all content can be quickly assess or filtered by its quality and relevance.

Using reddit-lite, it is possible to access a portion of the data uploaded by users onto the reddit servers. By excluding various functionalities available on the official site (eg. posting capabilities, awards, user profiles), reddit-lite provides a more streamlined view of the core content which reddit makes available.

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


