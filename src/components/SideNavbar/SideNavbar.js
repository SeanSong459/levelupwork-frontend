import React from "react";

import "./SideNavbar.css";

import Teacher from "../../Assets/Teacher areas/Ellipse 38.png";
import ProgressTracker from "../../Assets/Teacher areas/Progress dark.png";
import IconGraduate from "../../Assets/Teacher areas/Icon awesome-user-graduate.png";
import HelpRequest from "../../Assets/Teacher areas/Icon material-live-help.png";
import ProjectSub from "../../Assets/Teacher areas/submit proj.png";
import ProjectLibrary from "../../Assets/Teacher areas/library light.png";
import Iconleft from "../../Assets/Student Areas/Icon open-caret-left.png";
import IconProfile from "../../Assets/Student Areas/Icon awesome-user-circle.png";
import IconSetting from "../../Assets/Student Areas/Icon material-settings.png";
import IconLogOut from "../../Assets/Student Areas/Icon awesome-sign-out-alt.png";

const SidenavBar = () => {
  return (
    <div className="sideNavBar">
      <div className="teacher-logo">
        <img src={Teacher} alt="teacher" />
      </div>
      <div className="progress-tracker">
        <div className="p-tracker">
          <h5>
            <img
              className="img"
              src={ProgressTracker}
              alt="progress-tracker"
              width={28}
            />
            PROGRESS TRACKER
          </h5>
        </div>
      </div>
      <div className="IconGraduate">
        <div className="p-tracker">
          <h5>
            <img
              className="img"
              src={IconGraduate}
              alt="progress-tracker"
              width={28}
            />
            STUDENT PROFILE
          </h5>
        </div>
      </div>
      <div className="HelpRequest">
        <div className="p-tracker">
          <h5>
            <img
              className="img"
              src={HelpRequest}
              alt="progress-tracker"
              width={28}
            />
            HELP REQUEST
          </h5>
        </div>
      </div>
      <div className="ProjectSub">
        <div className="p-tracker">
          <h5>
            <img
              className="img"
              src={ProjectSub}
              alt="progress-tracker"
              width={28}
            />
            PROJECT SUBMISSIONS
          </h5>
        </div>
      </div>
      <div className="ProjectLibrary1">
        <div className="p-tracker">
          <h5>
            <img
              className="img"
              src={ProjectLibrary}
              alt="progress-tracker"
              width={28}
            />
            PROJECT LIBRARY
          </h5>
        </div>
      </div>
      <div className="left-arrow-background">
        <div className="img-arrow">
          <img className="img-arrow1" src={Iconleft} alt="left-arrow" />
        </div>
      </div>
      <div className="Icon-profile">
        <div className="profile">
          <img className="icon" src={IconProfile} width={14} alt="profile" />
          <p>Profile</p>
        </div>
        <div className="profile">
          <img className="icon" src={IconSetting} width={14} alt="profile" />
          <p>Settings</p>
        </div>
        <div className="profile">
          <img className="icon" src={IconLogOut} width={14} alt="profile" />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );
};

export default SidenavBar;
