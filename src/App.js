import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header/Header';
import Food from './components/Food/Food';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Food></Food>
    </div>
  );
}

export default App;
