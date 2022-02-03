import React, { useState } from "react";
import "./Profile.css";
import Information from "./Information";

const Profile = ({ img, firsName, lastName }) => {
  const [day, setDay] = useState("");

  return (
    <div className="main-container">
      <div className="main-container-left">
        <section className="container-left-top">
          <img src={img} alt="profilephoto" />
          <article>
            <p>Report for</p>
            <p>
              <span>{firsName} </span>
              <span>{lastName} </span>
            </p>
          </article>
        </section>

        <section className="container-left-botton">
          <ul>
            <li>
              <a href="#" onClick={() => setDay("day")}>
                Daily
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDay("week")}>
                Weekly
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setDay("month")}>
                Monthly
              </a>
            </li>
          </ul>
        </section>
      </div>
      <Information timef={day} />
    </div>
  );
};

export default Profile;
