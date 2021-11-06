import React from 'react';
import { ThemeProvider } from "@emotion/react";
import Header from "./components/header";
import theme from "./theme/theme";
import styled from '@emotion/styled';

const Main = styled.div(({ theme }) => ({
  direction: theme.direction,
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
      </Main>
    </ThemeProvider>
  );
}

export default App;
