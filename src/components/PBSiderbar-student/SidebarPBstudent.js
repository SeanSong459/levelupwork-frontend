import React from "react";
import { PBDataStudent } from "./PBDataStudent";
import "./SidebarPB.css";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

/* ---------------This file is kept for reference only, the method in this file is not working properly--------------- */
const SidebarPBStudent = () => {
  const [click, setClick] = useState(false);
  const [DarkImage, setDarkImage] = useState(false);
  const handleClick = () => setClick(!click);
  // const [newActiveLink, setNewActiveLink] = useState(null);
  // let filterImage = PBDataStudent.map((item) => item.img);
  // console.log(filterImage);
  // const [DarkImage, setDarkImage] = useState(PBDataStudent);
  // const toggleImgColor = (id) => {
  //   const newDarkImage = [...DarkImage];
  //   console.log(newDarkImage);
  //   let updatedImg = newDarkImage.map((item) => {
  //     if (item.id === id) {
  //       return <img src={item.imgBlack} alt="**" />;
  //     } else return <img src={item.img} alt="**" />;
  //     // return item.id === id ? (
  //     //   <img src={item.imgBlack} alt="*" />
  //     // ) : (
  //     //   <img src={item.img} alt="^" />
  //     // );
  //   });
  //   setDarkImage({ updatedImg });
  // };

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
          {PBDataStudent.map((item, index) => {
            return (
              <li
                key={index}
                className={click ? "SidebarPBRow Narrow" : "SidebarPBRow"}
              >
                <NavLink
                  // onClick={() => toggleImgColor(1)}
                  onClick={() => setDarkImage(!DarkImage)}
                  // className={({ isActive }) =>
                  //   isActive ? "SBLink Active" : "SBLink"
                  // }
                  to={item.path}
                  // isActive={(match, location) => {
                  //   match && setNewActiveLink(index); // <-- set active index
                  //   return match; // <-- return boolean
                  // }}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "#707070",
                          // background: "#7600dc",
                          cursor: "pointer",
                          background: "#b2e4fa",
                          transition: "0.3s ease-in-out",
                        }
                      : { color: "#fff" }
                  }
                >
                  {/* {newActiveLink === index // <-- check active index against current index
                    ? item.imgBlack && <img src={item.imgBlack} alt="x" />
                    : item.img && <img src={item.img} alt="y" />} */}

                  <img
                    className={
                      click ? "SidebarPBImage Narrow" : "SidebarPBImage"
                    }
                    src={item.img}
                    // onClick={handleClick}
                    // src={click ? item.imgBlack : item.img}
                    // src={DarkImage ? item.imgBlack : item.img}
                    // src={({ isActive }) =>
                    //   isActive ? "item.img" : "item.imgBlack"
                    // }
                    alt="#"
                    width={28}
                  />

                  <span
                    className={
                      click ? "SidebarPBTitle Narrow" : "SidebarPBTitle"
                    }
                  >
                    {item.title}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div>
        <NavLink to="/projectbuilder" onClick={() => setDarkImage(!DarkImage)}>
          <img
            src={
              DarkImage
                ? "../../Images/Student Areas/video dark.png"
                : "../../Images/Student Areas/video.png"
            }
            alt="*"
            width={28}
          ></img>
          <span>title</span>
        </NavLink>
      </div> */}
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

export default SidebarPBStudent;
