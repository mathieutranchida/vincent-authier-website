import React, { useRef, useEffect } from "react";
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
  let photoGallery = useRef(null);
  let revealRefs = useRef([]);
  revealRefs.current = [];

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
            // markers: "true",
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

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
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.backgroundBody};
`;

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
