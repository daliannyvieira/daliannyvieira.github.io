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
    position: absolute;
    max-width: 52vw;
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
  padding: 1rem 0;
  list-style: none;
  color: rgb(43, 43, 44);
  cursor: pointer;
  list-style: none;
  border-bottom: 5px solid transparent;
  border-bottom-radius: 4px;
  position: relative;

  @media (min-width: 992px) {
    padding: 1rem 0 1rem;
    width: 10rem;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: black;
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    content: '';
    width: 0;
    height: 5px;
    border-radius: 50px;
    transition: width 0.25s, background 0.35s;
  }

  &:hover::after {
    width: 5rem;
    content: '';
  }

  &:nth-child(1):hover::after {
    background: #F583BA;
  }
  &:nth-child(2):hover::after {
    background: #6DDAF2;
  }
  &:nth-child(3):hover::after {
    background: #92E085;
  }
  &:nth-child(4):hover::after {
    background: #F5BD69;
  }
  &:nth-child(5):hover::after {
    background: #F2856D;
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
              <img src={cat} alt="Icone Inicio"/>
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
              <Link to='/blog' activeStyle={{ color: '#92E085',  fontWeight: 'bolder' }}>
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
