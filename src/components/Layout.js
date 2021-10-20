import React from 'react';
import Nav from "./Nav"
import Footer from "./Footer"
import { animated } from 'react-spring'
import styled from 'styled-components';
import { ThemeProvider } from './ThemeContext';
import GlobalStyles from './GlobalStyles';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const Wrap = styled(animated.section)`
  @media (min-width: 992px) {
    max-width: 85vw;
  }

  @media (min-width: 1200px) {
    max-width: 55vw;
  }
`;

const Content = styled(animated.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: 6rem auto;
  min-height: 70vh;
`;

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Main>
        <Wrap>
          <Nav location={location} />
          <Content>
            {children}
          </Content>
          <Footer/>
        </Wrap>
      </Main>
    </ThemeProvider>
  )
}

export default Layout