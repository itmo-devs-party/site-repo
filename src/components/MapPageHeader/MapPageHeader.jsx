import React from "react";
// eslint-disable-next-line
import { StartPageIcon,BottomNavigation,MainPageText,MainPageCarousel, MainPageTitle} from "../../components";
import { images } from "../../constants";
import "./MapPageHeader.scss";

const MapPageHeader = () => {
  return (
    <div className="map__page-header">
    <h1 className="map__page-header-text">
    <img src={images.AppLogo} alt="logo" />
    Hello there
    </h1>
    <h3 className="map__page__header-subtext">
    This is what we have for you for today
    </h3>
    </div>
      );
    };
export default MapPageHeader;