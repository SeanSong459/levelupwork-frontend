import styled from "styled-components";

export const ProjectButton = styled.button`
  display: inline-flex;
  padding: 1px 11px;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.08px;
  font-size: 12px;
  font-weight: 600;
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600;700&display=swap");
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  background: #f7f0f0 0% 0% no-repeat padding-box;
  cursor: pointer;
  box-shadow: 0px 0.5px 1px #00000047;
  border: 0.5px solid #807e7e1a;
  border-radius: 3px;
  color: #000000c2;

  &:focus {
    color: #ffffff;
    background: transparent linear-gradient(180deg, #65affa 0%, #0e81ff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: 0px 0.5px 1px #00000047;
    border: 0.5px solid #0000001a;
    border-radius: 3px 0px 0px 3px;
    opacity: 1;
  }
`;

export const FilterText = styled.span`
  padding-top: 5px;
  padding-right: 10px;
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600;700&display=swap");
  font-family: "Open Sans", sans-serif;
  color: #767676;
  letter-spacing: 0.32px;
  font-size: 12px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 12px;
`;

export const BacktoTopButton = styled.button`
  border-radius: 7px;

  display: inline-flex;
  padding: 5px 33px;
  font-size: 12px;
  font-family: "Nunito";
  text-transform: uppercase;
  background: #e5ab2c 0% 0% no-repeat padding-box;
  cursor: pointer;
  box-shadow: 0px 4px 5px #00000029;
  border: 0.5px solid #807e7e1a;
  color: #ffffff;
  cursor: pointer;
`;

export const BacktoTopContainer = styled.div`
  display: flex;
  justify-content: right;
  margin-top: 120px;
  margin-right: 17px;
`;
