import { width } from "@mui/system";
import React from "react";

const Skills = () => {
  const skills = [
    { name: "javaScript", level: "85%", style: { width: "85% " } },
    { name: "React.JS", level: "85%", style: { width: "85% " } },
    { name: "Node.JS", level: "60%", style: { width: "60% " } },
    { name: "Express.JS", level: "60%", style: { width: "60% " } },
    { name: "MongoDB", level: "60%", style: { width: "60% " } },
    { name: "Figma", level: "60%", style: { width: "60% " } },
    { name: "JAVA", level: "50%", style: { width: "50% " } },
    { name: "Python", level: "50%", style: { width: "50% " } },
  ];
  const style = {
    width: "10%",
  };
  // implement the feature tu adjust skills level dynamically
  return (
    <section className="ftco-section" id="skills-section">
      <div className="container sec-container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <h1 className="big big-2">Skills</h1>
            <h2 className="mb-4">My Skills</h2>
            <p>These are the skills that am proficent in.</p>
          </div>
        </div>
        <div className="row">
          {skills.map((items) => (
            <div className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
                <h3>{items.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={items.style}
                  >
                    <span>{items.level}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
