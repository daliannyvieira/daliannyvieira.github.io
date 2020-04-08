import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import image01 from "../images/me.jpg"
import image03 from "../images/03.jpg"
import image04 from "../images/04.jpeg"
import image05 from "../images/05.jpg"
import image06 from "../images/06.jpg"
import image07 from "../images/07.jpg"
import image08 from "../images/08.jpg"

const AboutPage = ({ data }) => {
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

      <div className="about-container">
        <div className="about-gallery">
          <img className="image-about" src={image01} alt="I'm smiling" />
        </div>
        <p>
          Lorem ipsum
        </p>
        <div className="about-gallery">
          <img className="image-about" src={image03} alt="I'm smiling" />
          <img className="image-about" src={image04} alt="I'm smiling" />
        </div>
        <div className="about-gallery">
          <img className="image-about" src={image08} alt="I'm smiling" />
          <img className="image-about" src={image07} alt="I'm smiling" />
        </div>
        <div className="about-gallery">
          <img className="image-about" src={image06} alt="I'm smiling" />
          <img className="image-about" src={image05} alt="I'm smiling" />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
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

export default AboutPage;