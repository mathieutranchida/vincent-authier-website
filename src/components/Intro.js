import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

import background from "../assets/background_1.0.jpg";

const Intro = () => {
  let loadTextAnimation = useRef(null);
  let loadSlidingBackgroundAnimation = useRef(null);
  let mainTitleAnimation = useRef(null);
  let scrollDownText = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power6.out" } });
    tl.to(loadTextAnimation, { opacity: 0.75, duration: 1, delay: 0.75 });
    tl.to(loadTextAnimation, { opacity: 0.5, duration: 0.5 });
    tl.to(loadTextAnimation, { opacity: 0.75, duration: 0.5 });
    tl.to(loadTextAnimation, { opacity: 0.5, duration: 0.5 });
    tl.to(loadTextAnimation, { opacity: 0.75, duration: 0.5 });
    tl.to(loadTextAnimation, {
      opacity: 0,
      duration: 1,
    });
    tl.to(
      loadSlidingBackgroundAnimation,
      {
        opacity: 0,
        duration: 1,
        delay: 0.65,
        ease: "Power5.out",
      },
      "-=1"
    );
    tl.fromTo(
      mainTitleAnimation,
      { x: "-30%", opacity: 0 },
      { x: "0%", duration: 2, delay: -0.25, ease: "Power6.out" },
      "-=1"
    );
    tl.fromTo(
      mainTitleAnimation,
      { opacity: 0 },
      { opacity: 1, duration: 2, ease: "Power6.out" },
      "-=1"
    );
    tl.fromTo(
      scrollDownText,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "Power6.out" },
      "-=1"
    );
  }, []);

  return (
    <>
      <Background>
        <IntroText
          ref={(e) => {
            loadSlidingBackgroundAnimation = e;
          }}
        >
          <H1
            ref={(e) => {
              loadTextAnimation = e;
            }}
          >
            Chargement...
          </H1>
        </IntroText>
        <MainTitleDiv
          ref={(e) => {
            mainTitleAnimation = e;
          }}
        >
          <MainTitle>Vincent Authier</MainTitle>
          <MainTitleSub>Professional skier</MainTitleSub>
        </MainTitleDiv>
        <ScrollDownDiv
          ref={(e) => {
            scrollDownText = e;
          }}
        >
          Scroll down
        </ScrollDownDiv>
      </Background>
    </>
  );
};

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: none;
`;

const IntroText = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: black;
  margin: 0px;
`;

const H1 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: white;
  font-weight: 200;
  font-size: 15pt;
  text-transform: uppercase;
  opacity: 0;
`;

const MainTitleDiv = styled.div`
  position: absolute;
  top: 61%;
  right: 15%;
  transform: translate(25%, -61%);
  user-select: none;
`;

const MainTitle = styled.h1`
  margin: 0px;
  text-transform: uppercase;
  font-weight: 400;
  font-style: italic;
  font-size: 5.5vw;
  color: white;
  text-shadow: 0px 0px 15px rgba(75, 75, 75, 0.9);
`;

const MainTitleSub = styled.p`
  margin: -5px 7px 0px 0px;
  text-transform: uppercase;
  font-weight: 300;
  font-style: italic;
  font-size: 1.7vw;
  color: white;
  text-shadow: 0px 0px 15px rgba(75, 75, 75, 0.9);
  text-align: right;
`;

const ScrollDownDiv = styled.div`
  margin: 0px;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%);
  overflow: none;
  padding: 10px;
  font-size: 13pt;
  font-weight: 400;
  font-style: italic;
  cursor: pointer;
  color: white;
`;

export default Intro;
