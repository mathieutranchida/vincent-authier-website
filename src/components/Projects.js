import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";

import COLORS from "../constants";

const Projects = () => {
  return (
    <>
      <Wrapper>
        <H1>Mes projets</H1>
        <Main>
          <PlayerDiv>
            <ReactPlayer url="https://youtu.be/_GsBRHxuekw" />
          </PlayerDiv>
          <DescriptionDiv>
            <DescriptionTitle>May West</DescriptionTitle>
            <DescriptionDetail>
              Maywest est un court-métrage de 12 minutes explorant quelques uns
              des plus grands snowparks de l'Amérique du Nord. En 2019, j'ai
              passé trois semaines à Whistler puis deux semaines à Mont Hood. Ce
              film fait état des meilleures images que nous avons capturé avec
              mon frère, Emile Landry et Mathieu Tranchida.
            </DescriptionDetail>
            <DescriptionDetail>Nombre de vues: +12,000</DescriptionDetail>
            <Table>
              <TableLeft1>Réalisé par:</TableLeft1>
              <TableRight>
                <TableRightItem>Emile Landry</TableRightItem>
              </TableRight>
            </Table>
            <Table>
              <TableLeft2>Filmeurs:</TableLeft2>
              <TableRight>
                <TableRightItem>
                  Antoine Authier
                  <br />
                  Emile Landry
                  <br />
                  Mathieu Tranchida
                </TableRightItem>
              </TableRight>
            </Table>
            <Table>
              <TableLeft3>Photographe:</TableLeft3>
              <TableRight>
                <TableRightItem>Mathieu Tranchida</TableRightItem>
              </TableRight>
            </Table>
          </DescriptionDiv>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.backgroundBody};
  color: ${COLORS.textBody};
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
  max-width: 1020px;
  width: 100%;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
`;

const PlayerDiv = styled.div`
  min-width: 640px;
`;

const DescriptionDiv = styled.div`
  margin-left: 30px;
`;

const DescriptionTitle = styled.h3`
  margin: 0px 0px 15px 0px;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 500;
`;

const DescriptionDetail = styled.div`
  text-align: justify;
  margin-top: 15px;
`;

const Table = styled.div`
  display: flex;
  margin-top: 15px;
`;

const TableLeft1 = styled.div`
  margin-right: 25px;
`;

const TableLeft2 = styled.div`
  margin-right: 38px;
`;

const TableLeft3 = styled.div`
  margin-right: 15px;
`;

const TableRight = styled.div``;

const TableRightItem = styled.div``;

export default Projects;
