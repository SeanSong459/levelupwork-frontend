import styled from "styled-components";

export const FooterContainer = styled.div`
  /* padding: 80px 30px; */
  padding: 100px 30px 180px 50px;
  background: #b2e4fa;
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  margin-top: 150px;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  padding: 20px 40px 20px 100px;
  /* background: red; */
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  /* margin-left: 60px; */

  &:last-child {
  }
`;

export const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3px;
`;

export const FooterLink = styled.a`
  color: #707070;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
  /* text-transform: capitalize; */
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600;700&display=swap");
  font-family: "Open Sans", sans-serif;
  font-weight: bold;

  &:hover {
    color: white;
    transition: 200ms ease-in;
  }
`;

export const FooterTitle = styled.p`
  font-size: 24px;
  /* letter-spacing: 0.48px; */
  color: #707070;
  margin-bottom: 40px;

  font-family: "Nunito";
  /* font-weight: 100; */
`;

export const FooterContent = styled.div`
  margin-bottom: 10px;
  margin-top: -20px;
  /* max-width: 200px; */
  color: #707070;
  font-size: 20px;
  text-align: left;
  letter-spacing: 0.4px;
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@300;400;500;600;700&display=swap");
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  width: 400px;
`;
