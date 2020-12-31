import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Intro from "./Intro";
import About from "./About";
import InstaStats from "./InstaStats";
import ContactMe from "./ContactMe";
import GridPhoto from "./GridPhoto";
import Footer from "./Footer";
import Sponsors from "./Sponsors";

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
            toggleActions: "play none none none",
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
          <section ref={addToRefs}>
            <About />
          </section>
          <section ref={addToRefs}>
            <Sponsors />
          </section>
          <section ref={addToRefs}>
            <InstaStats />
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

export default Homepage;
