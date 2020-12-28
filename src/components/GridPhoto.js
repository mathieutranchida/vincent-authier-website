import React from "react";
import styled from "styled-components";

import COLORS from "../constants";

import Img1 from "../assets/grid/gridGallery-1.jpg";
import Img2 from "../assets/grid/gridGallery-2.jpg";
import Img3 from "../assets/grid/gridGallery-3.jpg";
import Img4 from "../assets/grid/gridGallery-4.jpg";
import Img5 from "../assets/grid/gridGallery-5.jpg";
import Img6 from "../assets/grid/gridGallery-6.jpg";
import Img7 from "../assets/grid/gridGallery-7.jpg";
import Img8 from "../assets/grid/gridGallery-8.jpg";
import Img9 from "../assets/grid/gridGallery-9.jpg";
import Img10 from "../assets/grid/gridGallery-10.jpg";
import Img11 from "../assets/grid/gridGallery-11.jpg";
import Img12 from "../assets/grid/gridGallery-12.jpg";
import Img13 from "../assets/grid/gridGallery-13.jpg";
import Img14 from "../assets/grid/gridGallery-14.jpg";
import Img15 from "../assets/grid/gridGallery-15.jpg";
import Img16 from "../assets/grid/gridGallery-16.jpg";
import Img17 from "../assets/grid/gridGallery-17.jpg";

const GridPhoto = () => {
  return (
    <>
      <Wrapper>
        <Main>
          <Image1 src={Img6} />
          <Image2 src={Img9} />
          <Image3 src={Img3} />
          <Image4 src={Img10} />
          <Image5 src={Img11} />
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  color: ${COLORS.textBody};
  background-color: ${COLORS.textBody};
  margin: 100px 0;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(250, 4px);
  grid-column-gap: 20px;
`;

const Image1 = styled.img`
  grid-column: 1 / 2;
  grid-row: 10 / 11;
  width: 100%;
`;

const Image2 = styled.img`
  grid-column: 2 / 3;
  width: 100%;
`;

const Image3 = styled.img`
  grid-column: 3 / 4;
  grid-row: 26 / 27;
  width: 100%;
`;

const Image4 = styled.img`
  grid-column: 4 / 5;
  grid-row: 19 /20;
  width: 100%;
`;

const Image5 = styled.img`
  grid-column: 5 / 6;
  grid-row: 45 / 56;
  width: 100%;
`;

export default GridPhoto;
