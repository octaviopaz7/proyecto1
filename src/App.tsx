import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Specialties from './components/Specialties';
import About from './components/About Me';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Presentation />
      <About />
      <Specialties />
    </div>
  );
}

export default App;
