import React from "react";
import "./Projects.css";
const Projects = () => {
  const projects = [
    {
      image: "./assets/images/Ellipse.png",
      title: "TWINDER",
      info: "A live Geolocation app for finding tweets and twitter users around you.",
    },
  ];
  return (
    <div className="Project-wrapper">
      <p
        style={{
          color: "#7562E0",
          fontFamily: "Poppins",
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "600",
          lineHeight: "normal",
          marginBottom: "0",
        }}
      >
        Featured projects:
      </p>
      <p
        style={{
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "18px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "32px",
          marginTop: "16px",
        }}
      >
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      <div
        style={{
          display: "flex",
          marginTop: "36px",
          flexShrink: "0",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {projects.map((item, index) => {
          return (
            <div className="project-div" key={index}>
              <img src={item.image} />
              <p className="project-title">{item.title}</p>
              <p className="project-info">{item.info}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className="project-viewlive">View Live</p>
                <p className="project-gitHub">Github Repo</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
