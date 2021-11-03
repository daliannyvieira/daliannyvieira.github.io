import React from "react"
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const Wrap = styled.footer`
  width: 100%;
  padding: 1rem;
`
const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        buildTime(formatString: "DD/MM/YYYY")
      }
    }
  `)
  const build = data.site.buildTime;

  return (
    <Wrap>
      <small>© {new Date().getFullYear()}, desenvolvido com
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> por @daliannyvieira. | Atualizado: {build}
      </small>
    </Wrap>
  )
}

export default Footer