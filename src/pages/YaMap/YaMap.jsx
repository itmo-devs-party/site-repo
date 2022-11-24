import React from "react";
import "./YaMap.scss";
import { YandexMap } from "../../components";
import {images} from "../../constants";
// accordion component on react

const YaMap = () => {
  return (
    <div className="home__page-main-div">
    <div className="home__page-header">
      <h1 className="home__page-header-text">
        <img src={images.AppLogo} alt="logo" />
        Hello there
      </h1>
      <h3 className="home__page__header-subtext">
        This is what we have for you for today
      </h3>
    </div>
    <YandexMap />
    </div>
  );
};
export default YaMap;