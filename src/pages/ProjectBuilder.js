import React from "react";
// import SidebarPBStudent from "../components/PBSiderbar-student/SidebarPBstudent";
import PBNavBar from "../components/PBNavbar/PBNavbar";
import DrawerWrapper from "../components/AppDrawer/DrawerWrapper";
import CopyRight from "../components/CopyRight/CopyRight";
import PBSidebarStudent from "../components/PBSiderbar-student/PBSidebarStudent";


const ProjectBuilder = () => {
  return (
    <div>
      <PBNavBar />
      <div className="DrawerContainer" style={{ display: "flex" }}>
        {/* <SidebarPBStudent style={{ flex: "1.5" }} /> */}
        <PBSidebarStudent style={{ flex: "1.5" }} />
        <DrawerWrapper style={{ flex: "5" }} />
      </div>
      <CopyRight />
    </div>
  );
};

export default ProjectBuilder;
