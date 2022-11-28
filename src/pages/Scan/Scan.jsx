import React from "react";
import "./Scan.scss";
import {images} from "../../constants";
// accordion component on react

export const Scan = () => {
    return (

        <div className="scan__page-main-div">
            <div className="scan__page-header">
                <h1 className="scan__page-header-text">
                    <img src={images.AppLogo} alt="logo" />
                    Hello there
                </h1>
                <h3 className="map__page__header-subtext">
                    This is what we have for you for today
                </h3>
            </div>
            <div id="qr-reader" style="width:70vh"></div>
            <div id="qr-reader-results"></div>
            <script src="https://raw.githubusercontent.com/mebjas/html5-qrcode/master/minified/html5-qrcode.min.js"></script>
        </div>);
};

export default Scan;
