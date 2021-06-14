import { Link } from "gatsby"
import React from "react"
import styled from 'styled-components';

const Title = styled.li`
  margin: 0;
  padding: 0.25rem 0;
  list-style: none;
  transition: 0.25s ease;
  font-size: 0.85rem;
`

const Subtitle = styled.li`
  margin: 0;
  list-style: none;
  transition: 0.25s ease;
  font-size: 0.75rem;
  padding-bottom: 1.25rem;
`

const Footer = () => (
  <footer>
    <Title> © {new Date().getFullYear()}, Built with
            {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> by @daliannyvieira.</Title>
    <Subtitle> ALL RIGHTS RESERVED </Subtitle>
  </footer>
)

export default Footer
