import React from "react";
import ProjectBuilderRoutes from "../../ProjectBuilderRoutes";
// import CopyRight from "../CopyRight/CopyRight";
import "./DrawerWrapper.css";

const DrawerWrapper = () => {
  return (
    <>
      <div className="DrawerWrapper">
        <div className="DrawerInner">
          <ProjectBuilderRoutes />
        </div>
      </div>
      {/* <CopyRight /> */}
    </>
  );
};

export default DrawerWrapper;
