import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Feature from "./pages/Features";
import Teacher from "./pages/Teacher";
import Projects from "./pages/Projects";
// import Footer from "./components/Footer/Footer";
import LoginModal from "./components/Login/LoginModal";
import Signupmodal from "./components/Login/Signupmodal";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<Signupmodal />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
