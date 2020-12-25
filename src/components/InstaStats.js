import React from "react";
import styled from "styled-components";

import COLORS from "../constants";
import {
  BsPeople,
  BsChat,
  BsHeart,
  BsPersonCheck,
  BsGrid,
} from "react-icons/bs";

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
  padding: 50px;
`;

const H1 = styled.h2`
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1020px;
  margin: 10px 0px 0px 0px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 10px;
`;

const InfoTitle = styled.div`
  margin-top: 10px;
  font-size: 14pt;
  text-transform: uppercase;
  font-weight: 400;
  text-align: center;
`;

const InfoDetail = styled.div`
  font-size: 15pt;
  text-transform: uppercase;
  font-weight: 500;
`;

export default InstaStats;
