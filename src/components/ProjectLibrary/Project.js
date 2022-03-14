import React from "react";

const Project = ({ img, title, level, category }) => {
  return (
    <>
      <div className="project">
        <img src={img} alt=""></img>
        <div className="projectTitle"> {title}</div>
        <div className="projectSubtitle">
          <span>{level}</span> | <span>{category}</span>
        </div>
      </div>
    </>
  );
};

export default Project;
