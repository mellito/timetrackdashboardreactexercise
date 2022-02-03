import React from "react";
import data from "./data.json";
import menu from "./images/icon-ellipsis.svg";
import "./Information.css";

const Information = ({ timef }) => {
  if (timef === "day") {
    return (
      <div className="container-right-information">
        {data.map(({ title, timeframes: { daily } }) => (
          <section className="information-background">
            <div className="information-data">
              <article>
                <h2>{title}</h2>
                <img src={menu} alt="menu" />
              </article>

              <article className="information-data-botton">
                <span>{`${daily.current}hrs`}</span>
                <p> {`last ${timef}  ${daily.previous}hrs`}</p>
              </article>
            </div>
          </section>
        ))}
      </div>
    );
  }

  if (timef === "week") {
    return (
      <div className="container-right-information">
        {data.map(({ title, timeframes: { weekly } }) => (
          <section className="information-background">
            <div className="information-data">
              <article>
                <h2>{title}</h2>
                <img src={menu} alt="menu" />
              </article>

              <article className="information-data-botton">
                <span>{`${weekly.current}hrs`}</span>
                <p> {`last ${timef}  ${weekly.previous}hrs`}</p>
              </article>
            </div>
          </section>
        ))}
      </div>
    );
  }

  if (timef === "month") {
    return (
      <div className="container-right-information">
        {data.map(({ title, timeframes: { monthly } }) => (
          <section className="information-background">
            <div className="information-data">
              <article>
                <h2>{title}</h2>
                <img src={menu} alt="menu" />
              </article>

              <article className="information-data-botton">
                <span>{`${monthly.current}hrs`}</span>
                <p> {`last ${timef}  ${monthly.previous}hrs`}</p>
              </article>
            </div>
          </section>
        ))}
      </div>
    );
  }

  if (timef === "") {
    return (
      <div className="container-right__span">
        <span>choose a timeframe</span>
      </div>
    );
  }
};

export default Information;
