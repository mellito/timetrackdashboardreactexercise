import React from "react";
import menu from "./images/icon-ellipsis.svg";
import "./Information.css";

const Information = ({ backColor, title, current, previous, timef }) => {
  return (
    <div
      className="information-background"
      style={{
        backgroundColor: `${backColor}`,
      }}
    >
      <div className="information-data">
        <article>
          <h2>{title}</h2>
          <img src={menu} alt="menu" />
        </article>

        <article className="information-data-botton">
          <span>{`${current}hrs`}</span>
          <p> {`last ${timef}  ${previous}hrs`}</p>
        </article>
      </div>
    </div>
  );
};

export default Information;
