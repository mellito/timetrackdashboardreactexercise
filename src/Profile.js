import React from "react";
import "./Profile.css";

const Profile = ({ img, firsName, lastName }) => {
  return (
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
  );
};

export default Profile;
