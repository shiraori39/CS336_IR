import React, { useState } from 'react';
import Header from './Components/Header.js';
import InputBar from './Components/InputBar.js';
import Result from './Components/Result.js';
import './App.css';
import fetchData from './services/query.js';

function App() {

  const [data, setData] = useState('');

  const handleDataChange = (newData) => {
    setData(newData);
  }

  return (
    <div className="App">
        <Header />
        <InputBar onDataChange={handleDataChange} />
        <Result data={data} />
    </div>
  );
}

export default App;
