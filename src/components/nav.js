import { Link } from 'gatsby'
import React from 'react';

import styled from 'styled-components';
import cat from "../images/cat.svg"

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 11;

  @media (min-width: 992px) {
    max-width: 75vw;
    position: absolute;
  }
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: rgba(52,61,68,0.1) 0px 1px 2px;
  width: 100vw;
  justify-content: space-between;

  @media (min-width: 992px) {
    box-shadow: none;
    background: transparent;
    width: 65vw;
  }
`

const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  @media (min-width: 992px) {
    width: 20rem;
  }
`

const Item = styled.li`
  text-align: center;
  width: 4rem;
  padding: 1rem 0 0.65rem;
  list-style: none;
  transition: 0.65s ease-out;
  border-bottom: 5px solid transparent;
  color: rgb(43, 43, 44);
  cursor: pointer;
  list-style: none;
  transition: all 0.65s ease-out 0s;
  border-bottom: 5px solid transparent;

  @media (min-width: 992px) {
     width: 10rem;
  }

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

const Logo = styled.span`
  margin-left: 1rem;
  width: 2rem;
`

const Nav = () => {
  return (
    <>
      <NavContainer>
        <Wrap>
          <Logo>
            <Link to='/' activeStyle={{ color: '#F583BA', fontWeight: 'bolder' }}>
              <img src={cat} alt=""/>
            </Link>
          </Logo>
          <List>
            <Item>
              <Link to='/' activeStyle={{ color: '#F583BA', fontWeight: 'bolder' }}>
                início
              </Link>
            </Item>
            <Item>
              <Link to='/about' activeStyle={{ color: '#6DDAF2', fontWeight: 'bolder' }}>
                sobre
              </Link>
            </Item>
            <Item>
              <Link to='/posts' activeStyle={{ color: '#92E085',  fontWeight: 'bolder' }}>
                blog
              </Link>
            </Item>
            <Item>
              <a href={'https://www.colab55.com/@daliannyvieira'}>
                lojinha
              </a>
            </Item>
          </List>
        </Wrap>
      </NavContainer>
    </>
  )
}

export default Nav
