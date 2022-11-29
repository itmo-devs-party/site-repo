import React from "react";
import "./Scan.scss";
import ScriptTag from 'react-script-tag';
// accordion component on react


const Scan = () => {
    return (
        <div>
            <div className="scan">
                <video id="qr-video"></video>
            </div>
            <button id="startButton">Start</button>
            <input className="res" id="res" type="text"></input>
            <ScriptTag type="text/javascript" src = "./src/pages/Scan/qr.jsx"></ScriptTag>
        </div >
    );
};

export default Scan;
