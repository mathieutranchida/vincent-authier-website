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
  let aboutLeftText = useRef(null);
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
        y: "-3000px",
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
    gsap.fromTo(
      aboutRightText,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: mainBody,
          start: "top bottom",
          end: "top center",
          toggleActions: "play none none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      aboutLeftText,
      { y: "0" },
      {
        duration: 1,
        y: "3000px",
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
    gsap.fromTo(
      aboutLeftText,
      { autoAlpha: 0 },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: mainBody,
          start: "top bottom",
          end: "top center",
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
      <AboutRightText
        ref={(e) => {
          aboutRightText = e;
        }}
      >
        Vincent Authier Vincent Authier Vincent Authier Vincent Authier Vincent
        Authier Vincent Authier Vincent Authier Vincent Authier Vincent Authier
        Vincent Authier Vincent Authier Vincent Authier Vincent Authier Vincent
        Authier Vincent Authier Vincent Authier Vincent Authier Vincent Authier
        Vincent Authier Vincent Authier Vincent Authier Vincent Authier Vincent
        Authier Vincent Authier Vincent Authier Vincent Authier Vincent Authier
      </AboutRightText>
      <AboutLeftText
        ref={(e) => {
          aboutLeftText = e;
        }}
      >
        Vincent Authier Vincent Authier Vincent Authier Vincent Authier Vincent
        Authier Vincent Authier Vincent Authier Vincent Authier Vincent Authier
        Vincent Authier Vincent Authier Vincent Authier Vincent Authier Vincent
        Authier Vincent Authier Vincent Authier Vincent Authier Vincent Authier
        Vincent Authier Vincent Authier Vincent Authier Vincent Authier Vincent
        Authier Vincent Authier Vincent Authier Vincent Authier Vincent Authier
      </AboutLeftText>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.backgroundBody};
`;

const IntroWrapper = styled.div``;

const Main = styled.div`
  overflow: hidden;
`;

const AboutRightText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  font-size: 15pt;
  color: ${COLORS.movingBorder};
  width: 6000px;
  transform-origin: 0 26px;
  transform: rotate(90deg);
  position: fixed;
  top: calc(100vh - 26px);
  left: calc(100vw - 26px);
  z-index: 5000;
  user-select: none;
  @media (max-width: 700px) {
    display: none;
  }
`;

const AboutLeftText = styled.div`
  text-transform: uppercase;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  font-size: 15pt;
  color: ${COLORS.movingBorder};
  width: 6000px;
  transform-origin: 0 0px;
  transform: rotate(270deg);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 5000;
  user-select: none;
  @media (max-width: 700px) {
    display: none;
  }
`;

export default Homepage;
