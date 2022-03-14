import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterColumn,
  FooterRow,
  FooterLink,
  FooterTitle,
  FooterContent,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterRow>
            <FooterColumn>
              <FooterTitle>COMPANY</FooterTitle>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Partners</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>COURSES</FooterTitle>
              <FooterLink href="#">Register</FooterLink>
              <FooterLink href="#">Login</FooterLink>
              <FooterLink href="#">Projects</FooterLink>
              <FooterLink href="#">Teachers</FooterLink>
              <FooterLink href="#">Parents</FooterLink>
              <FooterLink href="#">Resources</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>SUPPORT</FooterTitle>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Helpdesk</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>LEGAL</FooterTitle>
              <FooterLink href="#">Terms & Conditions</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </FooterColumn>
            <FooterColumn>
              <FooterTitle>LevelUp Works</FooterTitle>
              <FooterContent>
                LevelUp works is an Auckland-based enterprise dedicated to
                developing game-based learning software to help teachers in
                response to the New Zealand Digital Technologies & Hangarau
                Matihiko.
              </FooterContent>
              <FooterLink href="#">alan@levelupworks.com</FooterLink>
              <FooterLink href="#">(021) 668 185</FooterLink>
            </FooterColumn>
          </FooterRow>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
