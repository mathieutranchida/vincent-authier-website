import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Intro from "./Intro";
import About from "./About";
import InstaStats from "./InstaStats";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import GridPhoto from "./GridPhoto";

import COLORS from "../constants";

const Homepage = () => {
  return (
    <>
      <Wrapper>
        <Intro />
        <Nav>
          <Ul>
            <Li>
              <Link to="#about">À propos</Link>
            </Li>
            <Li>
              <Link to="#">Projets</Link>
            </Li>
            <Li>
              <Link to="#">Portfolio</Link>
            </Li>
            <Li>
              <Link to="#">Contact</Link>
            </Li>
          </Ul>
        </Nav>
        <section id="about">
          <About />
        </section>
        <section>
          <InstaStats />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <ContactMe />
        </section>
        <section>
          <GridPhoto />
        </section>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Nav = styled.nav`
  position: sticky;
  top: 0;
`;

const Ul = styled.ul`
  width: 100%;
  margin: 0px;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 20px;
  background: ${COLORS.backgroundHeader};
`;

const Li = styled.li`
  list-style: none;
  margin-right: 20px;
  font-size: 25px;
  font-weight: 400;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.textHeader};
`;

export default Homepage;
