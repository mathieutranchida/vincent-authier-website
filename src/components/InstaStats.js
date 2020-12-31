import React from "react";
import styled from "styled-components";

import COLORS from "../constants";
import {
  BsPeople,
  BsChat,
  BsHeart,
  BsPersonCheck,
  BsGrid,
  BsPieChart,
  BsGeo,
  BsCalendar,
} from "react-icons/bs";

import { FiMapPin } from "react-icons/fi";

const InstaStats = () => {
  const logoStyle = { height: "30px", width: "35px" };
  return (
    <>
      <Wrapper>
        <H1>Mes statistiques instagram</H1>
        <Main>
          <InfoDiv>
            <BsPeople style={logoStyle} />
            <InfoTitle>Nombre d'abonnées</InfoTitle>
            <InfoDetail>2714</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsHeart style={logoStyle} />
            <InfoTitle>Moyenne de "J'aime"</InfoTitle>
            <InfoDetail>878</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsPersonCheck style={logoStyle} />
            <InfoTitle>Taux d'engagement</InfoTitle>
            <InfoDetail>34.63%</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsChat style={logoStyle} />
            <InfoTitle>Moyenne de commentaires</InfoTitle>
            <InfoDetail>61</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsGrid style={logoStyle} />
            <InfoTitle>Nombre de posts</InfoTitle>
            <InfoDetail>75</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsPieChart style={logoStyle} />
            <InfoTitle>Homme / Femme</InfoTitle>
            <InfoDetail>78% / 22%</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <FiMapPin style={logoStyle} />
            <InfoTitle>Pays principal</InfoTitle>
            <InfoDetail>Canada (76.7%)</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsGeo style={logoStyle} />
            <InfoTitle>Ville principale</InfoTitle>
            <InfoDetail>Montreal (50%)</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsCalendar style={logoStyle} />
            <InfoTitle>Tranche d'âge #1</InfoTitle>
            <InfoDetail>18 - 24 ans (54.2%)</InfoDetail>
          </InfoDiv>
          <InfoDiv>
            <BsCalendar style={logoStyle} />
            <InfoTitle>Tranche d'âge #2</InfoTitle>
            <InfoDetail>25 - 34 ans (28.7%)</InfoDetail>
          </InfoDiv>
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
  grid-template-columns: repeat(auto-fit, 190px);
  grid-column-gap: 10px;
  grid-row-gap: 25px;
  justify-content: space-between;
  width: 100%;
  max-width: 1075px;
  margin: 20px 0px 0px 0px;
  @media (max-width: 1122px) {
    justify-content: center;
  }
  @media (max-width: 445px) {
    grid-template-columns: repeat(auto-fit, 150px);
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(auto-fit, 140px);
  }
  @media (max-width: 340px) {
    grid-template-columns: repeat(auto-fit, 120px);
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoTitle = styled.div`
  margin-top: 10px;
  font-size: 14pt;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
  @media (max-width: 360px) {
    font-size: 13pt;
  }
  @media (max-width: 340px) {
    font-size: 12pt;
  }
`;

const InfoDetail = styled.div`
  font-size: 13pt;
  font-weight: 300;
  text-align: center;
  @media (max-width: 360px) {
    font-size: 12pt;
  }
  @media (max-width: 340px) {
    font-size: 11pt;
  }
`;

export default InstaStats;
