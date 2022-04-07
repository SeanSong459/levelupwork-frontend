import { Routes, Route, useParams } from "react-router-dom";
import React from "react";
import LearningObjectives from "./pages/LearningObjectives";
import Instructions from "./pages/Instructions";
import VideoTutorial from "./pages/VideoTutorial";
import MakeProject from "./pages/MakeProject";
import SubmitProject from "./pages/SubmitProject";

function ProjectBuilderRoutes() {
  const { StudentID } = useParams();

  return (
    <>
      <Routes>
        <Route path="/" element={<LearningObjectives />} />
        <Route path="/learningobjectives" element={<LearningObjectives />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/videotutorial" element={<VideoTutorial />} />
        <Route path="/makeproject/:StudentID" element={<MakeProject />} />
        <Route path="/submitproject" element={<SubmitProject />} />
      </Routes>
    </>
  );
}

export default ProjectBuilderRoutes;
