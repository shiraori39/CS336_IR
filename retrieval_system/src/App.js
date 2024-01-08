import React from 'react';
import Header from './Components/Header.js';
import InputBar from './Components/InputBar.js';
import Result from './Components/Result.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <InputBar />
        <Result />
    </div>
  );
}

export default App;
