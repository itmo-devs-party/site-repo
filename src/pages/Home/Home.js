import React from "react";
// eslint-disable-next-line
import { StartPageIcon,BottomNavigation,MainPageText,MainPageCarousel} from "../../components";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="home__page-header">
        <h1 className="home__page-header-text">
          <img src={images.AppLogo} alt="logo" />
          Hello there
        </h1>
        <h3 className="home__page__header-subtext">
          This is what we have for you for today
        </h3>
      </div>
      <div className="home__page-content-body">
        <MainPageText />
      </div>
      <div className="home__page-carousel">
        <MainPageCarousel />
      </div>
    </div>
  );
};
export default Home;
