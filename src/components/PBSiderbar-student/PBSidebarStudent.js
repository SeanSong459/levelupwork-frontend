import React from "react";
import "./SidebarPB.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const PBSidebarStudent = () => {
  const [click, setClick] = useState(false);
//   const [DarkImage, setDarkImage] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className={click ? "SidebarPB Narrow" : "SidebarPB"}>
      <div className="PBLogoWrapper">
        <img
          className="SidebarPBlogo"
          src="../../Images/Student Areas/Ellipse 38.png"
          alt="teacher"
        />
      </div>
      <div>
        <ul className={click ? "PBListWrapper Narrow" : "PBListWrapper"}>
{/* --------------------------------- Link 1 ---------------------------------*/}
              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink 
                  className={({ isActive }) => (isActive ? 'NavLink1 Dark' : 'NavLink1')}
                  to="/projectbuilder/learningobjectives"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#707070",
                          cursor: "pointer",
                          background: "#b2e4fa",
                          transition: "0.3s ease-in-out",
                        }
                      : { color: "#fff" }
                  }
                >
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/objectives.png"
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    LEARNING OBJECTIVES
                  </span>
                </NavLink>
              </li>   
{/* --------------------------------- Link 2 ---------------------------------*/}
              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? 'NavLink2 Dark' : 'NavLink2')}
                  to="/projectbuilder/instructions"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#707070",
                          cursor: "pointer",
                          background: "#b2e4fa",
                          transition: "0.3s ease-in-out",
                        }
                      : { color: "#fff" }
                  }
                >
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/steps.png"
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    INSTRUCTIONS
                  </span>
                </NavLink>
              </li>  
{/* --------------------------------- Link 3 ---------------------------------*/}

              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? 'NavLink3 Dark' : 'NavLink3')}
                  to="/projectbuilder/videotutorial"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#707070",
                          cursor: "pointer",
                          background: "#b2e4fa",
                          transition: "0.3s ease-in-out",
                        }
                      : { color: "#fff" }
                  }
                >
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/video.png"
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    VIDEO TUTORIAL
                  </span>
                </NavLink>
              </li>         
{/* --------------------------------- Link 4 ---------------------------------*/}
              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? 'NavLink4 Dark' : 'NavLink4')}
                  to="/projectbuilder/makeproject"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#707070",
                          cursor: "pointer",
                          background: "#b2e4fa",
                          transition: "0.3s ease-in-out",
                        }
                      : { color: "#fff" }
                  }
                >
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/new proj.png"
                
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    MAKE PROJECT
                  </span>
                </NavLink>
              </li>    
{/* --------------------------------- Link 5 ---------------------------------*/}

              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink
                  className={({ isActive }) => (isActive ? 'NavLink5 Dark' : 'NavLink5')}
                  to="/projectbuilder/submitproject"
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#707070",
                          cursor: "pointer",
                          background: "#b2e4fa",
                          transition: "0.3s ease-in-out",
                        }
                      : { color: "#fff" }
                  }
                >
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/submit proj.png"
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    SUBMIT PROJECT
                  </span>
                </NavLink>
              </li>     
{/* --------------------------------- Dead Link 1 ---------------------------------*/}
              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink
                  to="/projectbuilder"
                >
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/prize.png"
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    BONUS CHALLENGE
                  </span>
                </NavLink>
              </li>    
{/* --------------------------------- Dead Link 2 ---------------------------------*/}
              <li
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink to="/projectbuilder">
                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src="../../Images/Student Areas/list.png"
                    alt="#"
                    width={28}
                  />
                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    TAKE THE QUIZ
                  </span>
                </NavLink>
              </li>         
        </ul>
      </div>
      <div
        className={click ? "SButtonWrapper Left" : "SButtonWrapper"}
        onClick={handleClick}
      >
        {click ? (
          <img
            className="SidebarButton"
            src="../../Images/Student Areas/Icon open-caret-right.png"
            alt="SButton"
          ></img>
        ) : (
          <img
            className="SidebarButtonRight"
            src="../../Images/Student Areas/Icon open-caret-left.png"
            alt="SButtonRight"
          ></img>
        )}
      </div>

      <div
        className={click ? "SidebarIconWrapper Vertical" : "SidebarIconWrapper"}
      >
        <Link to={"/profilestudent"} className="IconLink">
          <div className={click ? "SidebarIcon Vertical" : "SidebarIcon"}>
            <img
              src="../../Images/Student Areas/Icon awesome-user-circle.png"
              alt="Profile"
            ></img>
            <p
              className={
                click ? "SidebarIconTitle Vertical" : "SidebarIconTitle"
              }
            >
              Profile
            </p>
          </div>
        </Link>

        <div className={click ? "SidebarIcon Vertical" : "SidebarIcon"}>
          <img
            src="../../Images/Student Areas/Icon material-settings.png"
            alt="Settings"
          ></img>
          <p
            className={click ? "SidebarIconTitle Vertical" : "SidebarIconTitle"}
          >
            Setting
          </p>
        </div>
        <Link to={"/"} className="IconLink">
          <div className={click ? "SidebarIcon Vertical" : "SidebarIcon"}>
            <img
              src="../../Images/Student Areas/Icon awesome-sign-out-alt.png"
              alt="Log Out"
            ></img>
            <p
              className={
                click ? "SidebarIconTitle Vertical" : "SidebarIconTitle"
              }
            >
              Log out
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PBSidebarStudent;
