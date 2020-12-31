import React from "react";
import styled from "styled-components";

import COLORS from "../constants";

import axisLogo from "../assets/logo/axis-logo.png";
import giroLogo from "../assets/logo/giro-logo.png";
import maintenaLogo from "../assets/logo/maitena-logo.png";
import oneillLogo from "../assets/logo/o'neill-logo.png";
import snoprkLogo from "../assets/logo/snoprk-logo.png";
import surfaceLogo from "../assets/logo/surface-logo.png";

const Sponsors = () => {
  return (
    <>
      <Wrapper>
        <H1>Supporté par</H1>
        <Main>
          <LogoDiv>
            <Logo src={axisLogo} alt="logo axis boutique" />
          </LogoDiv>
          <LogoDiv>
            <Logo src={giroLogo} alt="logo axis boutique" />
          </LogoDiv>
          <LogoDiv>
            <Logo src={maintenaLogo} alt="logo axis boutique" />
          </LogoDiv>
          <LogoDiv>
            <Logo src={oneillLogo} alt="logo axis boutique" />
          </LogoDiv>
          <LogoDiv>
            <Logo src={surfaceLogo} alt="logo axis boutique" />
          </LogoDiv>
          <LogoDiv>
            <Logo src={snoprkLogo} alt="logo axis boutique" />
          </LogoDiv>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.textBody};
  background-color: ${COLORS.backgroundBody};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 50px 25px;
`;

const H1 = styled.h2`
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;
  font-size: 15pt;
  text-align: center;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 10px 0px 0px 0px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(3, 100px);
    justify-content: center;
    grid-column-gap: 75px;
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(2, 100px);
    grid-column-gap: 100px;
    grid-row-gap: 50px;
    margin-top: 25px;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 100px);
    grid-column-gap: 50px;
    grid-row-gap: 25px;
  }
  @media (max-width: 330px) {
    grid-template-columns: repeat(2, 100px);
    grid-column-gap: 25px;
  }
`;

const LogoDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100px;
  max-height: 100px;
`;

export default Sponsors;
