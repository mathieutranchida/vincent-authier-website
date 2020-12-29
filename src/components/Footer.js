import React from "react";
import styled from "styled-components";

import COLORS from "../constants";

const Footer = () => {
  return (
    <>
      <Wrapper>© Mathieu Tranchida - 2021 All rights Reserved </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  height: 75px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.textFooter};
  background-color: ${COLORS.backgroundFooter};
`;

export default Footer;
