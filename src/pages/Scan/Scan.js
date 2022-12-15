/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { QRs } from "../../constants";
// eslint-disable-next-line
import { images, kronv } from "../../constants";
import "./Scan.scss";



export default function Scan() {
    // eslint-disable-next-line
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="scan__MainContainer">
        <div className="scan__page-header">
        <h1 className="scan__page-header-title">
          Scan Page
          <img src={images.AppLogo} alt="logo" />
        </h1>
        </div>
          {/* <div className="aboba"> */}
            
         <div className="searchInput_Container">
          <scanPageHeader />
          <input
            className="searchInput__Container-search"
            type="text"
            placeholder="Search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            />
          
        </div> 
      {/* </div> */}
        <div className="scan__Elementes_Container">
          {QRs
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="scan_div" key={val.id}>
                  <img src={val.qr} alt="" />
                  <h3 className="scan-adress-title">{val.title}</h3>
                  <a className="scan_div-link" href={val.link}>
                    See more
                  </a>
                </div>
              );
            })}
          </div>
      </div>
    </>
  );
};


