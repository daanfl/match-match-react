import React from 'react'
import Playfield from './Playfield'
import './App.css'

function App() {
  return (
    <div className="App">
      <Playfield pairs={25} />
    </div>
  );
}

export default App
