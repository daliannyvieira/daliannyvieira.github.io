import React, { useContext } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';

import ThemeToggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';
import { chooseColor } from '../utils/chooseColor'
import logo from "../images/cat.svg"

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media (min-width: 992px) {
    position: absolute;
    top: 0;
  }
`

const Wrap = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-background);
  box-shadow: rgba(52,61,68,0.1) 0px 1px 2px;
  width: 100vw;
  justify-content: space-between;

  @media (min-width: 992px) {
    max-width: 85vw;
    box-shadow: none;
    background: transparent;
  }

  @media (min-width: 1200px) {
    max-width: 55vw;
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
  width: 3.75rem;
  padding: 1rem 0;
  list-style: none;
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
    color: var(--color-text);
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
  margin: 0 0.45rem;
  width: 2rem;
`

const Links = [
  {
    link: '/',
    text: 'início',
  },
  {
    link: '/about',
    text: 'sobre',
  },
  {
    link: '/blog',
    text: 'blog',
  }
]
  
const NavComp = ({location}) => {
  const { colorMode } = useContext(ThemeContext);
  
  return (
    <Nav>
      <Wrap>
        <Logo>
          <Link to='/' activeStyle={{ color: '#F583BA', fontWeight: 'bolder' }}>
            {colorMode === 'dark'
              ? <img style={{ filter: 'invert(100%)' }} src={logo} alt="Voltar ao inicio" />
              : <img src={logo} alt="Voltar ao inicio" />
            }
          </Link>
        </Logo>
        <List>
          {Links.map((item, index) => (
            <Item>
              <Link
                to={item.link}
                style={
                  (location && item.text === 'blog') ? 
                  {
                  color: chooseColor(index),
                  fontWeight: 'bolder'
                } : {

                }
              }
                activeStyle={{
                  color: chooseColor(index),
                  fontWeight: 'bolder'
                }}
              >
                {item.text}
              </Link>
            </Item>
          ))}
          <Item>
            <a href={'https://www.colab55.com/@daliannyvieira'}>
              lojinha
            </a>
          </Item>
        </List>
        <ThemeToggle />
      </Wrap>
    </Nav>
  )
}

export default NavComp
