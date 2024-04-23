import React from "react";
import List from "../components/List";
import "bootstrap/dist/css/bootstrap.min.css";

const course = [{ name: "IFN666", gpa: 4.0 }];

function About() {
  return (
    <div className="about">
      <div className="introduction">
        <h1>This is my space</h1>
        <p>I study Data Science at QUT, and I like to build stuff!</p>
      </div>
      <div class="profile">
        <img
          src={require("../assets/cat.jpg")}
          className="img-thumbnail"
          alt="profilePic"
        />
      </div>
    </div>
  );
}

export default About;
