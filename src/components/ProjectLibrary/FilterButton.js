import {
  ProjectButton,
  ButtonContainer,
  FilterText,
} from "./FilterButtonStyles";

import React from "react";

const FilterButton = () => {
  return (
    <>
      <ButtonContainer>
        <div>
          <ProjectButton> biginner </ProjectButton>
          <ProjectButton> intermediate </ProjectButton>
          <ProjectButton> advanced </ProjectButton>
        </div>

        <div>
          <FilterText> SHOW </FilterText>
          <ProjectButton> 25 </ProjectButton>
          <ProjectButton> 50 </ProjectButton>
          <ProjectButton> 100 </ProjectButton>
        </div>
      </ButtonContainer>
    </>
  );
};

export default FilterButton;
