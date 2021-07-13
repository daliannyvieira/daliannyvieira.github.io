import React from 'react';
import Nav from "./nav"
import { animated } from 'react-spring'
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (min-width: 992px) {
    max-width: 55vw;
  }
`;

const Container = styled(animated.section)`
  padding: 1rem;
  margin: 4rem auto;
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Nav />
      <Container>
        {children}
      </Container>
    </Main>
  )
}

export default Layout