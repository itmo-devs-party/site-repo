import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
// eslint-disable-next-line
import { NavBar } from './container';
import Buildings from './pages/Buildings'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <div className='main__page-container'>
        <NavBar />
        <Routes>
          <Route path='/Buildings' element={<Buildings />} />
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
