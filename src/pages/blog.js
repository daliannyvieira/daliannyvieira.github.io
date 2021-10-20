import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import Layout from "../components/Layout"

import Posts from "../templates/blog-list";

const PostsPage = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges.map(post => {
    return {
      ...post.node.frontmatter,
      ...post.node.fields
    }
  });

  return (
    <Layout location={location}>
      <Seo
        title="Blog"
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
      <Posts posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true },
        }
      }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            year: date(formatString: "YYYY")
            shortDate: date(locale: "pt-br", formatString: "MMMM, YYYY")
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