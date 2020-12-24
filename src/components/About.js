import React from "react";
import styled from "styled-components";

import COLORS from "../constants";

const About = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Paragraph>
            Mon nom est Vincent Authier, j’ai 22 ans et je suis actuellement
            étudiant en communications dans le programme de médias numériques à
            l’Université du Québec à Montréal.
          </Paragraph>
          <Paragraph>
            Étant passionné de nature et de sports depuis un tout jeune âge,
            garder un mode de vie actif a toujours été une priorité dans ma vie.
            Je fais actuellement énormément de ski freestyle durant l’hiver et
            je pratique le vélo de route durant l’été. Je tente donc de rester
            actif et ce, tout au long de l’année.
          </Paragraph>
          <Paragraph>
            Je représente des compagnies de ski depuis maintenant 5 ans. En
            effet, je suis actuellement commandité par Surface Skis, Axis
            Boutique, Giro, Matéina et je suis aussi ambassadeur pour Les
            Sommets. J’ai beaucoup appris au cours de ces années en ce qui
            concerne la représentation ainsi que la promotion de marques.
          </Paragraph>
        </Content>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background-color: ${COLORS.backgroundBody};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 50px 50px 70px 50px;
  text-align: justify;
`;

const Paragraph = styled.p`
  color: ${COLORS.textBody};
  margin: 0px;
  padding: 10px 0px;
  text-indent: 25px;
`;

export default About;
