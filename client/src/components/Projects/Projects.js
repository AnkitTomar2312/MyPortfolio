import React from "react";
import "./Projects.css";
const Projects = ({ innerRef }) => {
  const projects = [
    {
      image: "./assets/images/tomify.png",
      title: "Tomify-Music Player",
      info: "A music player develop using only HTML, CSS, JS.",
      github: "https://github.com/AnkitTomar2312/Tomify-Musicplayer.git",
      live: "https://ankittomar2312.github.io/Tomify-Musicplayer/",
    },
  ];
  return (
    <div ref={innerRef} className="Project-wrapper">
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
        className="project-wrapper"
        style={{
          display: "flex",
          marginTop: "36px",
          flexShrink: "0",
          flexWrap: "wrap",
          gap: "24px",
          width: "100%",
        }}
      >
        {projects.map((item, index) => {
          return (
            <div className="project-div" key={index}>
              <img src={item.image} />
              <p className="project-title">{item.title}</p>
              <p className="project-info">{item.info}</p>
              <div className="project-link-wrapper">
                <a href={item.live} className="project-viewlive">
                  View Live
                </a>
                <a href={item.github} className="project-gitHub">
                  Github Repo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
