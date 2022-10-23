import React from "react";
import { BuildingsList, BuildingsPageHeader } from "../../components";
import './Buildings.scss';

const Buldings = () => {
  return (
    <div class = 'buildings__page-main-container'>
      <div class='buildings__page-header-container'>
      <BuildingsPageHeader />
      <div classx='buildings__page-list-container'>
      <BuildingsList />
      </div>
      </div>
      
    </div>
  );
};

export default Buldings;