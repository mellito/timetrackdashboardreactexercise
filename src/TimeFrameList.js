import React from "react";
import "./TimeFrameList.css";

const TimeFrameList = ({ array, onClick }) => {
  return (
    <section className="container-left-botton">
      <ul>
        {array.map((time) => (
          <li key={time.id}>
            <a href="#" onClick={() => onClick(time.name)}>
              {time.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TimeFrameList;
