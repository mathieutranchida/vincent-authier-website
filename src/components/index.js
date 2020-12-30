import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "./Intro";
import About from "./About";
import InstaStats from "./InstaStats";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import GridPhoto from "./GridPhoto";
import Footer from "./Footer";

import COLORS from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  let mainBody = useRef(null);
  let revealRefs = useRef([]);
  let [introComplete, setIntroComplete] = useState(false);
  revealRefs.current = [];

  useEffect(() => {
    gsap.fromTo(
      mainBody,
      { display: "none" },
      {
        delay: 7.15,
        display: "",
        onComplete: changeIntroStatus,
      }
    );
  }, []);

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
          ease: "power6.out",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, [introComplete]);

  const changeIntroStatus = () => {
    setIntroComplete(true);
  };

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <>
      <Wrapper>
        <Intro />
        <Main
          ref={(e) => {
            mainBody = e;
          }}
        >
          <Nav>
            <Ul>
              <Li>
                <Link to="#">À propos</Link>
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
          <section ref={addToRefs}>
            <About />
          </section>
          <section ref={addToRefs}>
            <InstaStats />
          </section>
          <section ref={addToRefs}>
            <Projects />
          </section>
          <section ref={addToRefs}>
            <GridPhoto />
          </section>
          <section ref={addToRefs}>
            <ContactMe />
          </section>
          <Footer />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.backgroundBody};
`;

const Main = styled.div``;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
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
