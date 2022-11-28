import React, { useState } from "react";
// eslint-disable-next-line
import { images, kronv } from "../../constants";
import './Kronv.scss'


function Kronv() {
    // eslint-disable-next-line
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="adressContainer">
        <div className="adress__page-header">
        <h1 className="adresss__page-header-title">
          Adresss Page
          <img src={images.AppLogo} alt="logo" />
        </h1>
        </div>
          {/* <div className="aboba"> */}
      {/* </div> */}
        <div className="adressList_Container">
          {kronv
          // eslint-disable-next-line
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.adress.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val) => {
              return (
                <div className="adress_div" key={val.id}>
                  <img className="adress-image" src={val.image} alt="" />
                  <h3>{val.adress}</h3>
                  <p className="person">{val.person}</p>
                  <a className="adress_div-link" href={val.link}>
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

export default Kronv;
