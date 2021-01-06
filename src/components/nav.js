import { Link } from "gatsby"
import React, { useState } from 'react';

import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255);
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
`

const List = styled.ul`
  display: flex;
  margin: 0;
  box-shadow: 0 4px 2px -2px rgba(12,13,14,0.15);
  width: 100vw;
  align-items: center;
  justify-content: center;

  @media (min-width: 992px) {
    width: 65vw;
    justify-content: flex-start;
  }
`

const Item = styled.li`
  margin: 0;  
  padding: 0.75rem 1rem 0.45rem;
  list-style: none;
  transition: 0.65s ease-out;
  border-bottom: 5px solid transparent;

  &:hover {
    border-bottom-color: ${props => props.color};
  }
`

const Nav = () => {
  const [color, setColor] = useState('transparent')

  const chooseColor = () => {
    const colors = ['#70d5fc', '#f16da5', '#f7966f', '#ffd670', '#e6f06e']
    const number = Math.floor(Math.random() * colors.length)

    return colors[number];
  }

  const handlecolor = () => setColor(chooseColor)

  return (
    <>
      <NavContainer>
        <List>
          <Item color={color} onMouseMove={handlecolor}>
            <Link to="/">
              home
            </Link>
          </Item>
          <Item color={color} onMouseMove={handlecolor}>
            <Link to="/about">
              about
            </Link>
          </Item>
          <Item color={color} onMouseMove={handlecolor}>
            <Link to="/posts">
              blog
            </Link>
          </Item>
          <Item color={color} onMouseMove={handlecolor}>
            <a href={'https://www.colab55.com/@daliannyvieira'}>
              store
            </a>
          </Item>
        </List>
      </NavContainer>
    </>
  )
}

export default Nav
