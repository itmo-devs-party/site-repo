import React from 'react';

import './App.css';
import './App.scss';
// eslint-disable-next-line
import { StartPageIcon, BottomNavigation, MainPageText, MainPageCarousel} from './components';
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
        <h3 className='app__header-subtext'>
          This is what we have for you for today</h3>  
          </div>
      <div className='app__main_page_text_div'>
        <MainPageText/>
      </div>
      <div className='app__main__page-carousel'>
        <MainPageCarousel/>
      </div>
  </div>
  );
}

export default App;
