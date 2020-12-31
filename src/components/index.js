import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
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
  let aboutRightText = useRef(null);
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
    gsap.fromTo(
      aboutRightText,
      { y: "0" },
      {
        duration: 1,
        y: "-1500px",
        ease: "none",
        scrollTrigger: {
          trigger: mainBody,
          start: "top bottom",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
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
        <IntroWrapper>
          <Intro />
        </IntroWrapper>

        <Main
          ref={(e) => {
            mainBody = e;
          }}
        >
          <AboutRightText
            ref={(e) => {
              aboutRightText = e;
            }}
          >
            Vincent Authier Vincent Authier Vincent Authier Vincent Authier
            Vincent Authier Vincent Authier Vincent Authier Vincent Authier
            Vincent Authier Vincent Authier Vincent Authier Vincent Authier
            Vincent Authier Vincent Authier Vincent Authier Vincent Authier
            Vincent Authier Vincent Authier Vincent Authier Vincent Authier
            Vincent Authier Vincent Authier Vincent Authier Vincent Authier
            Vincent Authier Vincent Authier Vincent Authier
          </AboutRightText>
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
  height: 100%;
  overflow-y: hidden;
`;

const IntroWrapper = styled.div`
  position: relative;
`;

const Main = styled.div``;

const AboutWrapper = styled.div``;

const GridWrapper = styled.div``;

const ContactWrapper = styled.div``;

const AboutRightText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  font-size: 15pt;
  color: ${COLORS.movingBorder};
  width: 6000px;
  transform-origin: 0 26px;
  transform: rotate(90deg);
  position: absolute;
  top: 100vh;
  left: calc(100vw - 26px);
  z-index: 5000;
  user-select: none;
`;

export default Homepage;
