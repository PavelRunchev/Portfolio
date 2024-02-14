import React from 'react';

import './App.scss';

import Navigation from './components/Navigation/navigation';
import LeftSideMenu from './components/Navigation/left-side-menu';
import Main from './components/Main/main';

function App() {
  return (
    <div className="App-container">
      <Navigation />
      <LeftSideMenu />

      <Main />
    </div>
  );
}

export default App;
