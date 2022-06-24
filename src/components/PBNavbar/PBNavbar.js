import React from "react";
import { Link } from "react-router-dom";
import "./PBNavbar.css";
import StarLogo from "../../Assets/Home/Star Logo 07-3.png";

const PBNavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div>
          <img src={StarLogo} width={150} alt="LevelUpLogo" />
        </div>
        <div className="nav-project-wrapper">
          <span className="nav-project-title">
            <h4>PROJECT</h4>
            <h6>Introduction</h6>
          </span>
          <div className="nav-circle-wrapper">
            <span className="project-circle-big">1</span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
            <span className="project-circle-small"></span>
          </div>
        </div>
      </div>

      <div className="navbuttonwrapper">
        <div className="PBnavbuttonWrapper">
          <div className="PBnavbutton1">
            <h3>Take Screenshot</h3>
          </div>
          <div className="PBnavbutton2">
            <h3>Ask Teacher for help</h3>
          </div>
          <div className="PBnavbutton3">
            <h3>
              {/* button is not clickable on Project Builder page, I treat it as clickable, the same as Teacher Progress Tracker page */}
              <Link className="mp" to="/project">
                More Projects
              </Link>
            </h3>
          </div>
        </div>
        <span className="PBflagcontainer">
          <img
            className="PBflag"
            src={process.env.PUBLIC_URL + "/Images/Home/Nz Flag.png"}
            alt="Nz-Flag"
          />
          <img
            className="PBflag"
            src={process.env.PUBLIC_URL + "/Images/Home/Maori flag.png"}
            alt="Maori-Flag"
          />
        </span>
      </div>
    </div>
  );
};

export default PBNavBar;
