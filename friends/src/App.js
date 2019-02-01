import React, { Component } from 'react';
import FriendListView from './views/FriendsListView';
import FriendFormView from './views/FriendFormView';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendFormView />
        <FriendListView />
      </div>
    );
  }
}

export default App;
