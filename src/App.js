import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import Homepage from "./components/index";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Wrapper>
          <Switch>
            <Route exact patch="/" component={Homepage} />
          </Switch>
        </Wrapper>
      </BrowserRouter>
    </>
  );
};

const Wrapper = styled.div``;

export default App;
