import React from "react";
import './BuildingsPageHeader.scss';


function BuildingsPageHeader() {
    return (
      <div class="buildings__page__header-subcontainer">
      <div class="searchInput__Container-heading-container">
        <span  class="searchInput__Container-heading">Buildings</span></div>
      <div class="searchInput__Container-logo">
        <div class="searchInput-logo"></div>
      </div>

      {/* you can skip the block beneath and forget about it. it is heritage from the fisrt iteraion of the page */}

      {/* <div class="searchInput__Container-search">
        <div class="e445_9456"><span  class="buildings__page__header-search-text">Find Cousre</span>
          <div class="buildings__page__header-search-icon-div">
            <div class="buildings__page__header-search-icon"></div>
          </div>
        </div>
      </div> */}
    </div>
    );
};
export default BuildingsPageHeader;