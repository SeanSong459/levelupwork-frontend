import { Routes, Route } from "react-router-dom";
import React from "react";
import LearningObjectives from "./pages/LearningObjectives";
import Instructions from "./pages/Instructions";
import VideoTutorial from "./pages/VideoTutorial";
import MakeProject from "./pages/MakeProject";
import SubmitProject from "./pages/SubmitProject";

function ProjectBuilderRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LearningObjectives />} />
        <Route path="/learningobjectives" element={<LearningObjectives />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/videotutorial" element={<VideoTutorial />} />
        <Route path="/makeproject" element={<MakeProject />} />
        <Route path="/submitproject" element={<SubmitProject />} />
      </Routes>
    </>
  );
}

export default ProjectBuilderRoutes;
