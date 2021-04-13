import { Link } from "gatsby"
import React from 'react';

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
  color: rgb(43, 43, 44);
  cursor: pointer;
  margin: 0px;
  padding: 0.75rem 1rem 0.45rem;
  list-style: none;
  transition: all 0.65s ease-out 0s;
  border-bottom: 5px solid transparent;

  a {
    background-color: transparent;
    text-decoration: none;
    color: black;
    transition: all .15s ease-in-out;
  }

  &:nth-child(1):hover {
    border-bottom-color: #F583BA;
  }
  &:nth-child(2):hover {
    border-bottom-color: #6DDAF2;
  }
  &:nth-child(3):hover {
    border-bottom-color: #92E085;
  }
  &:nth-child(4):hover {
    border-bottom-color: #F5BD69;
  }
  &:nth-child(5):hover {
    border-bottom-color: #F2856D;
  }
`

const Nav = () => {
  return (
    <>
      <NavContainer>
        <List>
          <Item>
            <Link to="/">
              home
            </Link>
          </Item>
          <Item>
            <Link to="/about">
              about
            </Link>
          </Item>
          <Item>
            <Link to="/posts">
              blog
            </Link>
          </Item>
          <Item>
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