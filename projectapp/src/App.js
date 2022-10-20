import React from 'react';

import './App.css';
import './App.scss';
// eslint-disable-next-line
import { StartPageIcon, BottomNavigation, MainPageText, MainPageCarousel} from './components';
import { NavBar } from './container';
import { images } from './constants';

function App(){
  
  return (
      <div className='main__page-container'>
      <NavBar/>      
      <div className='main__page-app'>
        <h1 className='main__page-head-text'>
        <img src = {images.AppLogo} alt = "logo"/>
        Hello there</h1>
        <h3 className='main__page__header-subtext'>
          This is what we have for you for today</h3>  
          </div>
      <div className='main__page_text-div'>
        <MainPageText/>
      </div>
      <div className='main__page-carousel'>
        <MainPageCarousel/>
      </div>
  </div>
  );
}

export default App;
