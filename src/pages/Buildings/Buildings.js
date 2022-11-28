import React, { useState } from "react";
// eslint-disable-next-line
import { BuildingsPageHeader } from "../../components";
// eslint-disable-next-line
import { buildingsData, all } from "../../constants";
// eslint-disable-next-line
import { images, kronv } from "../../constants";
import "./Buildings.scss";



function Buldings() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="buildingsContainer">
        <div className="buildings__page-header">
        <h1 className="buildings__page-header-title">
          Buildings Page
          <img src={images.AppLogo} alt="logo" />
        </h1>
        </div>
          {/* <div className="aboba"> */}
            
        <div className="searchInput_Container">
          <BuildingsPageHeader />
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
        <div className="buildingsList_Container">
          {all
          // eslint-disable-next-line
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
                <div className="building_div" key={val.id}>
                  <img src={val.image} alt="" />
                  <h3 className="buildings-adress-title">{val.title}</h3>
                  <p className="adress-list">{val.list[0]}</p>
                  <a className="building_div-link" href={val.link}>
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

export default Buldings;
