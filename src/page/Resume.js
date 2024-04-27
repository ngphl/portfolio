import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import List from "../components/List";

/* Arrays of features */
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
  "Data Analytic",
  "Git",
  "Agile",
  "TestRail",
];

const career = [
  {
    time: "July 2019 - February 2020",
    title: "Barista | Waiter",
    description:
      "Responsible for managing machine maintenance, store organization, and supplier coordination, ensuring seamless operations and customer satisfaction in a fast-paced café environment. Maintained professional communication with clients and suppliers, while adhering to sanitation regulations and organizational standards for a safe and efficient workspace.",
  },
  {
    time: "February 2021 - July 2021",
    title: "Math Tutor",
    description:
      "Provided tailored math tutoring sessions for high school students, fostering understanding and academic growth through regular feedback and evaluation. Created a conducive learning environment to support students' progress and organization in mathematics.",
  },
  {
    time: "February 2023 - April 2023",
    title: "Graduate Software Engineer",
    description:
      "Engaged in software testing and project management using TestRail and Jira in a Scrum Agile framework, ensuring software quality and efficient defect tracking. Collaborated with development teams throughout the software development life cycle, conducting thorough testing and documenting defects according to the Product Defect Life Cycle. Contributed to Quality Assurance efforts, driving continuous improvement initiatives and enhancing CAD system functionality based on customer feedback and identified areas for improvement.",
  },
];

const coursework = [
  "Software Development",
  "Programming Paradigms",
  "Algorithm & Complexity",
  "Machine Learning",
  "Data & Web Analytics",
  "Data Exploration & Mining",
  "Web & Mobile Application Development",
  "Computational Explorations",
];

/* End Arrays of features */

function Resume() {
  return (
    <>
      {/* Overview section */}
      <section className="overview-section">
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
              Hospitality industry as Barista and Waiter at different cafe. This
              help me to become a more collaborative person and develop my
              softskill through interacting with customers and colleague daily.
            </p>
          </div>
        </div>
      </section>
      {/* Skills section */}
      <section className="skills-section">
        <h1>Skillset</h1>
        <div className="skills-list">
          <div className="skills-category rounded">
            <h3 className="fw-semibold">Languages</h3>
            <List array={languages}></List>
          </div>
          <div className="skills-category rounded">
            <h3 className="fw-semibold">Technical Skill</h3>
            <List array={skills}></List>
          </div>
        </div>
      </section>
      <section className="experience pt-100 pb-100" id="experience">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 mx-auto text-center">
              <div className="section-title">
                <h1>Career History</h1>
                <p>2019-2024</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <ul className="timeline-list">
                {/* Map every Single Experience */}
                {career.map((work, index) => (
                  <li key={index}>
                    <div className="timeline_content">
                      <span>{work.time}</span>
                      <h4>{work.title}</h4>
                      <p>{work.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className="divider"></hr>
      {/*Education Section*/}
      <section className="education-section">
        <div className="education-introduction">
          <div className="text-container">
            <h1>Queensland University of Technology</h1>
            <h4>Bachelor of Information Technology with Distinction</h4>
            <h4>Master of Information Technology - Data Science Major</h4>
            <h5 className="fw-light">
              Dean's List Award - Semester 1 - Science
            </h5>
          </div>
          <img
            src={require("../assets/QUT-Logo.png")}
            alt="qut-logo"
            className="logo-small"
          />
        </div>
        {/* Map notable coursework */}
        <div className="education">
          <h2>Notable Course</h2>
          <List array={coursework}></List>
        </div>
      </section>
    </>
  );
}

export default Resume;
