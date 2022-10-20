import React from "react";
// eslint-disable-next-line
import { StartPageIcon, BottomNavigation, MainPageText, MainPageCarousel } from '../../components';
import { images } from '../../constants';
import './Home.scss'

const Home = () => {
    return (
        <div>
            <div className='main__page-app'>
                <h1 className='main__page-head-text'>
                    <img src={images.AppLogo} alt="logo" />
                    Hello there</h1>
                <h3 className='main__page__header-subtext'>
                    This is what we have for you for today</h3>
            </div>
            <div className='main__page_text-div'>
                <MainPageText />
            </div>
            <div className='main__page-carousel'>
                <MainPageCarousel />
            </div>
        </div>
    );
};
export default Home;