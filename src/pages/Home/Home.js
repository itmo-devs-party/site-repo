import React from "react";
// eslint-disable-next-line
import { StartPageIcon,BottomNavigation,MainPageText,MainPageCarousel, MainPageTitle} from "../../components";
import { images } from "../../constants";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home__page-main-div">
      <div className="home__page-header">
        <h1 className="home__page-header-text">
          <img src={images.AppLogo} alt="logo" />
          ITMO story
        </h1>
        <h3 className="home__page__header-subtext">
          we all are a part of this story
        </h3>
      </div>
        <MainPageTitle />
      {/* <div className="home__page-content-body"> */}
        <MainPageText />
      {/* </div> */}
      <div className="home__page-carousel">
        <MainPageCarousel />
      </div>
    </div>
  );
};
export default Home;
