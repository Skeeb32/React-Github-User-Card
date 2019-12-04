import React from 'react';
import './App.css';
import GithubUser from './components/GithubUser'
import GithubFollowers from './components/GithubFollowers'

function App() {
  return (
    <div className="App">
      <GithubUser/>
      <GithubFollowers/>
    </div>
  );
}

export default App;
