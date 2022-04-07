import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Feature from "./pages/Features";
import Teacher from "./pages/Teacher";
import Projects from "./pages/Projects";
// import Footer from "./components/Footer/Footer";
// import Navbar from "./components/Navbar/Navbar"
// import SidenavBar from "./components/SideNavbar/SideNavbar";
import ProfileStudent from "./pages/ProfileStudent";
import ProjectBuilder from "./pages/ProjectBuilder";
import NotFound from "./pages/NotFound"


function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/projectbuilder/*" element={<ProjectBuilder />} />
          <Route path="/profilestudent" element={<ProfileStudent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
