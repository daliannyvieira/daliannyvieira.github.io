import React from 'react';
import Nav from "./nav"
import { animated } from 'react-spring/renderprops'
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled(animated.section)`
  margin: 4rem 0;
  padding: 1rem;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 6rem 0;
    width: 75vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <Main>
      <Nav/>
      <Container >
        {children}
      </Container>
    </Main>
  )
}

export default Layout