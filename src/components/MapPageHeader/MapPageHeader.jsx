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
      wITMO story
    </h1>
    <h3 className="map__page__header-subtext">
      we all are a part of this story
    </h3>
    </div>
      );
    };
export default MapPageHeader;