import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Posts from "../components/posts";

import styled from 'styled-components';
import color01 from '../images/color04.png'
import color02 from '../images/color03.png'

const WaterColor = styled.img`
  position: absolute;
  top: 1rem;
  left: 0%;
  z-index: -1;
  opacity: 0.5;
`;

const WaterColor2 = styled.img`
  position: absolute;
  top: 80%;
  right: 10%;
  z-index: -1;
  opacity: 0.5;
`;

const PostsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `blog`,
          `gatsby`,
          `javascript`,
          `vuejs`,
          `vue`,
          `nodejs`,
          `node`,
          `reactjs`,
          `react`,
          `python`,
          `vainaweb`,
          `dalianny vieira`,
          `teaching`,
          `leadership`,
        ]}
      />
      <WaterColor src={color01} alt="" />
      <WaterColor2 src={color02} alt="" />
      <Posts posts={posts}/>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            shortDate: date(formatString: "MMMM DD, YYYY")
            longDate: date(formatString: "MMMM DD, YYYY, h:mm:ss a")
            title
            description
            categories
            cover {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PostsPage;