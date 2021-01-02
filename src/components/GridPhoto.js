import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player/youtube";
import { gsap } from "gsap";

import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

import COLORS from "../constants";

// PAGE 1 PHOTOS
import Page1Img1 from "../assets/grid/page1/gridGallery-1.jpg";
import Page1Img3 from "../assets/grid/page1/gridGallery-3.jpg";
import Page1Img5 from "../assets/grid/page1/gridGallery-5.jpg";
import Page1Img6 from "../assets/grid/page1/gridGallery-6.jpg";
import Page1Img7 from "../assets/grid/page1/gridGallery-7.jpg";
import Page1Img9 from "../assets/grid/page1/gridGallery-9.jpg";
import Page1Img10 from "../assets/grid/page1/gridGallery-10.jpg";
import Page1Img11 from "../assets/grid/page1/gridGallery-11.jpg";
import Page1Img17 from "../assets/grid/page1/gridGallery-17.jpg";

// PAGE 2 PHOTOS
import Page2Img1 from "../assets/grid/page2/gridGallery-1.jpg";
import Page2Img2 from "../assets/grid/page2/gridGallery-2.jpg";
import Page2Img4 from "../assets/grid/page2/gridGallery-4.jpg";
import Page2Img8 from "../assets/grid/page2/gridGallery-8.jpg";
import Page2Img9 from "../assets/grid/page2/gridGallery-9.jpg";
import Page2Img10 from "../assets/grid/page2/gridGallery-10.jpg";

const GridPhoto = () => {
  let gridOne = useRef(null);
  let gridTwo = useRef(null);

  useEffect(() => {
    gsap.set(gridTwo, { x: "100%", autoAlpha: 0.1 });
  }, []);

  const showSlideTwo = () => {
    gsap.to(gridOne, {
      duration: 1,
      x: "-100%",
      autoAlpha: 0.1,
      ease: "power3.inOut",
    });
    gsap.to(gridTwo, {
      duration: 1,
      x: "0%",
      autoAlpha: 1,
      ease: "power3.inOut",
    });
  };

  const showSlideOne = () => {
    gsap.to(gridOne, {
      duration: 1,
      x: "0%",
      autoAlpha: 1,
      ease: "power3.inOut",
    });
    gsap.to(gridTwo, {
      duration: 1,
      x: "100%",
      autoAlpha: 0.1,
      ease: "power3.inOut",
    });
  };

  return (
    <>
      <DesktopWrapper>
        <MainWrapper>
          <Main
            ref={(e) => {
              gridOne = e;
            }}
          >
            <Section1Row1>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595458/grid-desktop-page-one/gridGallery-6_llm903.jpg"
                alt="image gallery"
              />
            </Section1Row1>
            <Section1Row2>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595457/grid-desktop-page-one/gridGallery-1_an5plc.jpg"
                alt="image gallery"
              />
            </Section1Row2>
            <Section2Row1>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595458/grid-desktop-page-one/gridGallery-10_eydo5e.jpg"
                alt="image gallery"
              />
            </Section2Row1>
            <Section2Row2>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595459/grid-desktop-page-one/gridGallery-17_drufiq.jpg"
                alt="image gallery"
              />
            </Section2Row2>
            <Section3Row1>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595457/grid-desktop-page-one/gridGallery-3_tb0jc3.jpg"
                alt="image gallery"
              />
            </Section3Row1>
            <Section3Row2>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595458/grid-desktop-page-one/gridGallery-7_tradzl.jpg"
                alt="image gallery"
              />
            </Section3Row2>
            <Section4Row1>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595457/grid-desktop-page-one/gridGallery-9_ex9vub.jpg"
                alt="image gallery"
              />
            </Section4Row1>
            <Section4Row2>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595457/grid-desktop-page-one/gridGallery-5_yg8vfx.jpg"
                alt="image gallery"
              />
            </Section4Row2>
            <Section5Row1>
              <Image
                src="https://res.cloudinary.com/dvo6bq91o/image/upload/v1609595458/grid-desktop-page-one/gridGallery-11_gwhgpj.jpg"
                alt="image gallery"
              />
            </Section5Row1>
            <Section5Row2>
              <SeeMoreDiv
                onClick={() => {
                  showSlideTwo();
                }}
              >
                <SeeMoreText>Voir plus</SeeMoreText> <FiChevronRight />
              </SeeMoreDiv>
            </Section5Row2>
          </Main>

          <Second
            ref={(e) => {
              gridTwo = e;
            }}
          >
            <Page2Section1Row1>
              <Image src={Page2Img4} alt="image gallery" />
            </Page2Section1Row1>
            <Page2Section1Row2
              onClick={() => {
                showSlideOne();
              }}
            >
              <ReturnDiv>
                <FiChevronLeft />
                <ReturnText>Retour</ReturnText>
              </ReturnDiv>
            </Page2Section1Row2>
            <Page2Section2Row1>
              <Image src={Page2Img2} alt="image gallery" />
            </Page2Section2Row1>
            <Page2Section2Row2>
              <ReactPlayer
                width="100%"
                height="100%"
                url="https://youtu.be/_GsBRHxuekw"
              />
            </Page2Section2Row2>
            <Page2Section3Row1>
              <ReactPlayer
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?fbclid=IwAR14NPYG5Lr47BELZ6l71bbt6c5TQhi-yzJ4XlstRIFjBk_GpAaGrobxhyI&v=HmDtQWdPiZU&feature=youtu.be&ab_channel=VincentAuthier"
              />
            </Page2Section3Row1>
            <Page2Section3Row2>
              <Image src={Page2Img9} alt="image galery" />
            </Page2Section3Row2>
            <Page2Section4Row1>
              <Image src={Page2Img8} alt="image galery" />
            </Page2Section4Row1>
            <Page2Section4Row2>
              <ReactPlayer
                width="100%"
                height="100%"
                url="https://youtu.be/6yEMHj8KmSo"
              />
            </Page2Section4Row2>
            <Page2Section5Row1>
              <DarkOverlay
                href="https://www.instagram.com/vince_authier/"
                target="_blank"
              >
                <InstaDiv>
                  <AiOutlineInstagram
                    style={{
                      width: "3vw",
                      height: "3vw",
                      textShadow: "4px 4px 11px rgba(150, 150, 150, 1)",
                    }}
                  />
                </InstaDiv>
                <MoreContent>
                  Voir plus de contenu sur mon instagram
                </MoreContent>
              </DarkOverlay>
            </Page2Section5Row1>
            <Page2Section5Row2>
              <Image src={Page2Img10} alt="image galery" />
            </Page2Section5Row2>
          </Second>
        </MainWrapper>
      </DesktopWrapper>
      <MobileWrapper>
        <MobileImage src={Page2Img2} alt="image galery" />
        <MobileImage src={Page1Img11} alt="image galery" />
        <MobileImage src={Page1Img6} alt="image galery" />
      </MobileWrapper>
    </>
  );
};

const DesktopWrapper = styled.div`
  color: ${COLORS.textBody};
  background-color: ${COLORS.backgroundBody};
  padding: 50px 0;
  position: relative;
  @media (max-width: 700px) {
    display: none;
  }
`;

const MainWrapper = styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
`;

// First page -- START _____________________________
const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(14, 2.5vw);
  grid-gap: 20px;
  padding: 0 30px;
  @media (max-width: 2500px) {
    grid-template-rows: repeat(14, 2.2vw);
  }
  @media (max-width: 1750px) {
    grid-template-rows: repeat(14, 2vw);
  }
  @media (max-width: 1250px) {
    grid-template-rows: repeat(14, 1.8vw);
  }
  @media (max-width: 1100px) {
    grid-template-rows: repeat(14, 1.5vw);
  }
  @media (max-width: 950px) {
    grid-template-rows: repeat(14, 1.3vw);
  }
  @media (max-width: 850px) {
    grid-template-rows: repeat(14, 1.1vw);
  }
`;

const Section1Row1 = styled.section`
  grid-column: 1 / 2;
  grid-row: 2 / 6;
`;

const Section1Row2 = styled.section`
  grid-column: 1 / 2;
  grid-row: 6 / 14;
`;

const Section2Row1 = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / 9;
`;

const Section2Row2 = styled.section`
  grid-column: 2 / 3;
  grid-row: 9 / 13;
`;

const Section3Row1 = styled.section`
  grid-column: 3 / 4;
  grid-row: 3 / 7;
`;

const Section3Row2 = styled.section`
  grid-column: 3 / 4;
  grid-row: 7 / 15;
`;

const Section4Row1 = styled.section`
  grid-column: 4 / 5;
  grid-row: 2 / 10;
`;

const Section4Row2 = styled.section`
  grid-column: 4 / 5;
  grid-row: 10 / 14;
`;

const Section5Row1 = styled.section`
  grid-column: 5 /6;
  grid-row: 4 / 12;
`;

const Section5Row2 = styled.section`
  grid-column: 5 /6;
  grid-row: 12 / 13;
`;

const SeeMoreDiv = styled.div`
  color: ${COLORS.textBody};
  float: right;
  display: flex;
  justify-content: right;
  align-items: center;
  cursor: pointer;
`;
const SeeMoreText = styled.div`
  padding-bottom: 1px;
  padding-right: 2px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 11pt;
`;

// First page -- END _______________________________

// Second Page -- START ____________________________

const Second = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(14, 2.5vw);
  grid-gap: 20px;
  padding: 0 30px;
  @media (max-width: 2500px) {
    grid-template-rows: repeat(14, 2.2vw);
  }
  @media (max-width: 1750px) {
    grid-template-rows: repeat(14, 2vw);
  }
  @media (max-width: 1250px) {
    grid-template-rows: repeat(14, 1.8vw);
  }
  @media (max-width: 1100px) {
    grid-template-rows: repeat(14, 1.5vw);
  }
  @media (max-width: 950px) {
    grid-template-rows: repeat(14, 1.3vw);
  }
`;

const Page2Section1Row1 = styled.section`
  grid-column: 1 / 2;
  grid-row: 4 / 12;
`;

const Page2Section1Row2 = styled.section`
  grid-column: 1 / 2;
  grid-row: 12 / 13;
`;

const ReturnDiv = styled.div`
  color: ${COLORS.textBody};
  float: left;
  display: flex;
  justify-content: left;
  align-items: center;
  cursor: pointer;
`;
const ReturnText = styled.div`
  padding-bottom: 1px;
  padding-left: 2px;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 11pt;
`;

const Page2Section2Row1 = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 10;
`;

const Page2Section2Row2 = styled.section`
  grid-column: 2 / 3;
  grid-row: 10 / 14;
`;

const Page2Section3Row1 = styled.section`
  grid-column: 3 / 4;
  grid-row: 3 / 7;
`;

const Page2Section3Row2 = styled.section`
  grid-column: 3 / 4;
  grid-row: 7 / 15;
`;

const Page2Section4Row1 = styled.section`
  grid-column: 4 / 5;
  grid-row: 1 / 9;
`;

const Page2Section4Row2 = styled.section`
  grid-column: 4 / 5;
  grid-row: 9 / 13;
`;

const Page2Section5Row1 = styled.section`
  grid-column: 5 / 6;
  grid-row: 2 / 6;
  background-color: grey;
  background-image: url(${Page2Img1});
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const DarkOverlay = styled.a`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.2s ease-in-out;
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const InstaDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoreContent = styled.div`
  padding-top: 15px;
  text-align: center;
  text-transform: uppercase;
  font-size: 11pt;
  text-shadow: 4px 4px 11px rgba(50, 50, 50, 1);
  padding: 5px;
`;

const Page2Section5Row2 = styled.section`
  grid-column: 5 / 6;
  grid-row: 6 / 14;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10px 0px;
  @media (min-width: 701px) {
    display: none;
  }
`;

const MobileImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 92vw;
  object-fit: cover;
  padding-bottom: 4vw;
`;

export default GridPhoto;
