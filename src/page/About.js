import React from "react";
import List from "../components/List";
import "bootstrap/dist/css/bootstrap.min.css";

const course = [{ name: "IFN666", gpa: 4.0 }];

function About() {
  return (
    <>
      <div className="intro-div">
        <div className="introduction">
          <h1>This is my space</h1>
          <p>I study Data Science at QUT, and I like to learn and teach!</p>
        </div>
        <div class="profile">
          <img
            src={require("../assets/cat.jpg")}
            className="img-thumbnail"
            alt="profilePic"
          />
        </div>
      </div>
      <section className="about-section">
        <div className="about-me">
          <div className="description">
            <h1>About me</h1>
            <p>
              Hi, I'm currently doing Master of Information Technology in Data
              Science at Queensland University of Technology. I graduated in
              2022 with Distinction in Bachelor of Information, major in Data
              Science and Computer Science.
            </p>
            <p>
              I started my bachelor in 2020, focusing mostly on Software Development side. 
              From 2021 onward, with additional Data Science major, I jump into the Machine Learning scene in addition to
              my Software Development focus. With strong foundation in Calculus, Statistic Mathematic and interest in technology, I found myself enjoying
              the novel of Machine Learning and Data Science, albeit I mostly study the basic and foundation during my bachelor years.      
            </p>
            <p>
              Using what I've learned in my bachelor, I decided to proceed with Master majoring in Data Science at QUT, while equipped with 
              solid software development skill cultivated in my prior years, with the aim of exploring further the rapidly growing AI industry.
            </p>
          </div>
          <img
            src={require("../assets/qut-logo.jpg")}
            className="img-fluid qut-logo"
            alt="qut"
          />
        </div>
      </section>
    </>
  );
}

export default About;
