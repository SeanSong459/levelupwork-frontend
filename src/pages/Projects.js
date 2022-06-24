import React from "react";
import ProjectHero from "../components/ProjectLibrary/ProjectHero";
import SidePanel from "../components/SidePanel/SidePanel";
import Grid from "@mui/material/Grid";
import ProjectLibrary from "../components/ProjectLibrary/ProjectLibrary";
import FilterButton from "../components/ProjectLibrary/FilterButton";
import {
  BacktoTopButton,
  BacktoTopContainer,
} from "../components/ProjectLibrary/FilterButtonStyles";
import Footer from "../components/Footer/Footer";
import NavbarHome from "../components/HomePage/NavbarHome";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Projects = () => {
  return (
    <>
      <NavbarHome />
      <Grid container spacing={2}>
        <Grid item lg={3.5}>
          <SidePanel />
        </Grid>
        <Grid className="ProjectContainer" item md={6} lg={7.5}>
          <ProjectHero />
          <FilterButton />
          <ProjectLibrary />
          <BacktoTopContainer>
            <BacktoTopButton onClick={scrollToTop}>Back to top</BacktoTopButton>
          </BacktoTopContainer>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Projects;
