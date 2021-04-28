import React from 'react';
import Nav from "./nav"
import { animated } from 'react-spring/renderprops'
import styled from 'styled-components';

const Container = styled(animated.section)`
  margin: 4rem 0;
  padding: 1rem;

  @media (min-width: 992px) {
    margin: 6rem 0;
    max-width: 75vw;
  }
`;

const Layout = ({ children }) => {
  return (
    <main>
      <Nav/>
      <Container >
        {children}
      </Container>
    </main>
  )
}

export default Layout