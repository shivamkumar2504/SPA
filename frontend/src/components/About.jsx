import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Founded in 2010, The Dine Reserve was born out of a passion for exceptional cuisine and a desire to create memorable dining experiences for our guests. What started as a small family-run restaurant has now grown into a full-fledged dining destination, renowned for its diverse menu and exceptional service. We believe that food should not only nourish the body but also bring people together. Over the years, we have welcomed thousands of guests, providing them with the finest culinary experiences in a warm and inviting atmosphere.
            </p>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;