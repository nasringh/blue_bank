import React from 'react';
import { ThemeProvider } from "@emotion/react";
import MyHeader from "./components/header";
import theme from "./theme/theme";
import styled from '@emotion/styled';
import Content from './components/content';

const Main = styled.div(({ theme }) => ({
  direction: theme.direction,
}));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <MyHeader title='صورتحساب' />
        <Content />
      </Main>
    </ThemeProvider>
  );
}

export default App;
