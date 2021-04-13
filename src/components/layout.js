import React, { useState, useEffect } from 'react';
import Nav from "./nav"
import { Spring, animated } from 'react-spring/renderprops'
import styled from 'styled-components';

const Container = styled(animated.div)`
  margin: 6rem 0;
  padding: 1rem;

  @media (min-width: 992px) {
    max-width: 75vw;
  }
`;

const Layout = ({ children }) => {

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => setToggle(!toggle)

  useEffect(() => {
    handleToggle()
  }, [])
  
  return (
    <Spring
      native
      to={{
        rotate: toggle ? '0deg' : '180deg',
        opacity: toggle ? 0 : 1,
      }}
      onRest={() => console.log('done')}>
      {({ rotate, scale, opacity }) => (
      <div style={{
          opacity: opacity,
        }}>
        <Nav/>
          <Container
            style={{
              opacity: opacity,
            }}
          >
            <main className='main-content'>{children}</main>
          </Container>
      </div>
    )}
    </Spring>
  )
}

export default Layout