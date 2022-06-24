import React from "react";
import ProjectBuilderRoutes from "../../ProjectBuilderRoutes";
import "./DrawerWrapper.css";

const DrawerWrapper = () => {
  return (
    <>
      <div className="DrawerWrapper">
        <div className="DrawerInner">
          <ProjectBuilderRoutes />
        </div>
      </div>
    </>
  );
};

export default DrawerWrapper;
