import * as React from "react";
import "./MainPageTitle.scss";
// eslint-disable-next-line 
import {facts} from "../../constants";

function MainPageTitle() {
  return (
<div className="main__page__header-div">
        {/* <div class="main__page__header-div-shadow"></div> */}
        <span className="main__page__header-today-fact">Random itmo fact:
        </span>
        <div>
          <p className="fact-style"> {facts[Math.floor(Math.random() * facts.length)].fact} </p>
        </div>
</div>
  );
}

export default MainPageTitle;