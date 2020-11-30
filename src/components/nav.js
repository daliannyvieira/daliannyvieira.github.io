import { Link } from "gatsby"
import React from "react"
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

  @media (min-width: 992px) {
    width: 65vw;
    border-bottom: 2px solid rgb(245, 245, 245);
  }
`

const Item = styled.li`
  margin: 0;
  padding: 0.55rem 0.75rem;
  list-style: none;
  transition: 0.25s ease;

  &:hover {
    color: #2b2b2c;
    background: #ff0;
  }
`

const Nav = () => (
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

export default Nav
