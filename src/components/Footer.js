import React from "react"
import styled from 'styled-components';

const Wrap = styled.footer`
  width: 100%;
  padding: 1rem;
`
const Footer = () => (
  <Wrap>
    <small>© {new Date().getFullYear()}, desenvolvido com
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> por @daliannyvieira.</small>
  </Wrap>
)

export default Footer