import './App.scss';
import { useState } from 'react';
import beers from './data/beer';
import Navbar from './containers/Navbar/Navbar'
import Main from './containers/Main/Main'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
