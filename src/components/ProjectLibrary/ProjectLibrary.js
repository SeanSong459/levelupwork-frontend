import React from "react";
import Project from "./Project";
import "./ProjectLibrary.css";

const projects = [
  {
    id: "1",
    img: "../../Images/Projects/Project 01.png",
    title: "Introduction",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "2",
    img: "../../Images/Projects/Project 02.png",
    title: "My Birthday",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "3",
    img: "../../Images/Projects/Project 03.png",
    title: "10 Block Challenge",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "4",
    img: "../../Images/Projects/Project 04.png",
    title: "Build a band",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "5",
    img: "../../Images/Projects/Project 05.png",
    title: "The bear and the monkey",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "6",
    img: "../../Images/Projects/Project 06.png",
    title: "Debugging",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "7",
    img: "../../Images/Projects/Project 07.png",
    title: "About me",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "8",
    img: "../../Images/Projects/Project 08.png",
    title: "I am here!",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "9",
    img: "../../Images/Projects/Project 09.png",
    title: "Funny faces",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "10",
    img: "../../Images/Projects/Project 10.png",
    title: "It tickles!",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "11",
    img: "../../Images/Projects/Project 11.png",
    title: "Penguin in a Desert",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "12",
    img: "../../Images/Projects/Project 12.png",
    title: "Time Travel",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "13",
    img: "../../Images/Projects/Project 13.png",
    title: "Birthday Card",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "14",
    img: "../../Images/Projects/Project 14.1.png",
    title: "The Lion and the Mouse Part 1",
    level: "BEGINNER",
    category: "Animation",
  },
  {
    id: "15",
    img: "../../Images/Projects/Project 14.2.png",
    title: "The Lion and the",
    level: "BEGINNER",
    category: "Animation",
  },
];

const ProjectLibrary = () => {
  return (
    <>
      <section className="ProjectLibrary">
        {projects.map((project) => {
          return <Project key={project.id} {...project}></Project>;
        })}
      </section>
    </>
  );
};

export default ProjectLibrary;
