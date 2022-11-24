import * as React from "react";
import "./MainPageTitle.scss";

function MainPageTitle() {
  return (
<div class="main__page__header-div">
        {/* <div class="main__page__header-div-shadow"></div> */}
        <span class="main__page__header-today-fact">Today fact</span>
        <span class="main__page__header-link-1">See all</span>
</div>
  );
}

export default MainPageTitle;