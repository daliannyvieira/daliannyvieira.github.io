import React from 'react';
import Nav from "./nav"
import Footer from "./footer"
import { animated } from 'react-spring'
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 992px) {
    max-width: 52vw;
  }
`;

const Container = styled(animated.section)`
  padding: 1rem;
  min-height: 70vh;
  margin: 6rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Nav />
      <Container>
        {children}
      </Container>
      <Footer/>
    </Main>
  )
}

export default Layout