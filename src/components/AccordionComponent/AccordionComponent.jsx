/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import "./AccordionComponent.scss";
import { peopleData } from "../../constants";

function AccordionComponent() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {peopleData.map((item, i) => (
          <div className="item">
            <div className="title" key={i} onClick={() => toggle(i)}>
              <h2 id={item.id}> {item.name}</h2>
                <a href={"#"+item.id}></a>
              <span> {selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p className="job_title">{item.job_title}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionComponent;