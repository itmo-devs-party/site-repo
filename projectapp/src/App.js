import React from 'react';

import './App.css';
import './App.scss';
// eslint-disable-next-line
import { StartPageIcon, BottomNavigation} from './components';
import { NavBar } from './container';
import { images } from './constants';

function App(){
  
  return (
      <div>
      <NavBar/>      
      <div className='app'>
        <h1 className='head-text'>
        <img src = {images.AppLogo} alt = "logo"/>
        Hello there</h1>
        <h3>
          This is what we have for you for today</h3>  
          </div>
      <div>
      {/* <StartPageIcon/> */}
      {/* <BottomNavigation/> */}
      </div>
      <div>
        <h3>
          This is not what you wait for</h3>  
        </div>
  </div>
  );
}

export default App;
