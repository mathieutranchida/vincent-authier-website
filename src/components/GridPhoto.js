import React from "react";
import styled from "styled-components";

import COLORS from "../constants";

import Img1 from "../assets/grid/gridGallery-1.jpg";
import Img3 from "../assets/grid/gridGallery-3.jpg";
import Img5 from "../assets/grid/gridGallery-5.jpg";
import Img6 from "../assets/grid/gridGallery-6.jpg";
import Img7 from "../assets/grid/gridGallery-7.jpg";
import Img9 from "../assets/grid/gridGallery-9.jpg";
import Img10 from "../assets/grid/gridGallery-10.jpg";
import Img11 from "../assets/grid/gridGallery-11.jpg";
import Img17 from "../assets/grid/gridGallery-17.jpg";

const GridPhoto = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Section1Row1>
            <Image src={Img6} />
          </Section1Row1>
          <Section1Row2>
            <Image src={Img1} />
          </Section1Row2>
          <Section2Row1>
            <Image src={Img10} />
          </Section2Row1>
          <Section2Row2>
            <Image src={Img17} />
          </Section2Row2>
          <Section3Row1>
            <Image src={Img3} />
          </Section3Row1>
          <Section3Row2>
            <Image src={Img7} />
          </Section3Row2>
          <Section4Row1>
            <Image src={Img9} />
          </Section4Row1>
          <Section4Row2>
            <Image src={Img5} />
          </Section4Row2>
          <Section5Row1>
            <Image src={Img11} />
          </Section5Row1>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.textBody};
  background-color: ${COLORS.backgroundBody};
  padding: 50px 0;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(14, 2.5vw);
  grid-gap: 20px;
  padding: 0 20px;
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
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

export default GridPhoto;
