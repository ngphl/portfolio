import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const languages = [
  "C#",
  "F#",
  "Javascript",
  "Java",
  "HTML",
  "CSS",
  "R",
  "Python & Libraries",
];
const skills = [
  "Object-Oriented Programming",
  "Functional Programming",
  "Machine Learning",
  "Data Visualization",
  "Git",
  "Agile",
  "TestRail",
];

function Resume() {
  return (
    <>
      <div className="overview-section">
        <div className="summary">
          <div className="skill-summary">
            <h1>My skillsets</h1>
            <p>
              I have a variety of skillsets that I cultivated through Data
              Science and Software Development at university. Experience ranging
              from .NET development C# to using R and Python from Machine
              Learning and Data Analytics. Also a touch on web development as
              I'm slowly getting better.
            </p>
          </div>
          <div className="experience-summary">
            <h1>Experience</h1>
            <p>
              After working for SDSI as a Graduate Software Engineer for 3
              months. I gain experience through working hands on with technical
              projects and agile development lifecyle.
            </p>
            <p>
              My work ethic are complimented by previous work experience in
              Hospitality industry as Barista and Waiter and different cafe back
              in Vietnam. This help me to become a more collaborative person and
              develop my softskill through interacting with customers and
              colleague daily.
            </p>
          </div>
        </div>
      </div>
      <div className="skills-section">
        <h1>Skillset</h1>
        <div className="skills-list">
          <div className="skills-category rounded">
            <h3 className="fw-semibold">Languages</h3>
            <ul>
              {languages.map((language, index) => (
                <li id={index}>{language}</li>
              ))}
            </ul>
          </div>
          <div className="skills-category rounded">
            <h3 className="fw-semibold">Technical Skill</h3>
            <ul>
              {skills.map((skill, index) => (
                <li id={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="career"></div>
      <div className="education"></div>
      <div className="outputs"></div>
    </>
  );
}

export default Resume;
