import React, {useState} from "react";
// eslint-disable-next-line
import { BuildingsList, BuildingsPageHeader } from "../../components";
import {data} from '../../constants'
import './Buildings.scss';

const Buldings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="buildingsContainer">
        <div className="searchInput_Container">
          <BuildingsPageHeader/>
          <input class="searchInput__Container-search" type="text" placeholder="Search here..." onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          
        </div>
        <div className="buildingsList_Container">
          {
            data 
              .filter((val) => {
                if(searchTerm == ""){
                  return val;
                }else if(val.adress.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <div className="building_div" key={val.id}>
                      <img src={val.image} alt="" />
                      <h3>{val.adress}</h3>
                      <p className="person">{val.person}</p>
                      <a className ='building_div-link' href={val.link}>See more</a>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default Buldings;