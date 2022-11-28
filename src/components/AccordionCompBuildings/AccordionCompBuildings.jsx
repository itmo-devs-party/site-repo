import React, { useState } from "react";
import "./AccordionCompBuildings.scss";
import { peopleData } from "../../constants";

function AccordionCompBuildings() {
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
              <h2> {item.name} </h2>
              <span> {selected === i ? "-" : "+"}</span>
            </div>
            <div className={selected === i ? "content show" : "content"}>
              <p>{item.description}</p>
              <p className="isu">
                <a href={`https://my.itmo.ru/persons/${item.isu}`}>
                  {item.isu}
                  </a>
                </p>
              <p className="email">{item.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccordionCompBuildings;