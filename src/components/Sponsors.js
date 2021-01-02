import React from "react";
import styled from "styled-components";

import COLORS from "../constants";

const Sponsors = () => {
  return (
    <>
      <Wrapper>
        <H1>Supporté par</H1>
        <Main>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595593/logo-sponsors/axis-logo_kkv5zv.png"
              alt="logo axis boutique"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595593/logo-sponsors/maitena-logo_oumij9.png"
              alt="logo maiteina"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595594/logo-sponsors/surface-logo_qzqowq.png"
              alt="logo surface skis"
            />
          </LogoDiv>
          <LogoDiv>
            <Logo
              src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595594/logo-sponsors/snoprk-logo_dsepfv.png"
              alt="logo snoprk les sommets"
            />
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
  padding: 25px 25px 50px;
  @media (max-width: 700px) {
    padding-bottom: 0;
    padding-top: 0;
  }
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
  max-width: 800px;
  margin: 10px 0px 0px 0px;
  @media (max-width: 1000px) {
    justify-content: center;
    grid-column-gap: 75px;
  }
  @media (max-width: 800px) {
    grid-column-gap: 50px;
  }
  @media (max-width: 635px) {
    grid-template-columns: repeat(2, 100px);
    grid-column-gap: 100px;
    grid-row-gap: 50px;
    margin-top: 10px;
  }
  @media (max-width: 500px) {
    grid-column-gap: 100px;
    grid-row-gap: 50px;
  }
  @media (max-width: 400px) {
    grid-column-gap: 50px;
    grid-row-gap: 25px;
  }
  @media (max-width: 330px) {
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
