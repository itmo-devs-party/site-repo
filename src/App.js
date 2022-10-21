import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import { NavBar } from './container';

// eslint-disable-next-line
import {Home, Buildings} from './pages';

function App() {

  return (
    <Router>
      {/* <div className='main__app-container'> */}
        <NavBar/>
        <Routes>
          <Route path='/Buildings' element={<Buildings />} />
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
