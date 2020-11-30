import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

import image01 from "../images/me.jpg"
import image03 from "../images/03.jpg"
import image09 from "../images/09.jpeg"
import image05 from "../images/05.jpg"
import image06 from "../images/06.jpg"
import image07 from "../images/07.jpg"
import image08 from "../images/08.jpg"
import image10 from "../images/me02.jpg"
import color01 from '../images/color01.png'
import color03 from '../images/color03.png'
import color04 from '../images/color04.png'

const WaterColor = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  opacity: 0.5;
`;

const WaterColor2 = styled.img`
  position: absolute;
  bottom: 20%;
  right: 0;
  z-index: -1;
  opacity: 0;
  
  @media (min-width: 992px) {
    top: 20%;
    opacity: 0.25;
  }
`;

const WaterColor3 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.5;
  
  @media (min-width: 992px) {
    bottom: 10%;
  }
`;

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
      <WaterColor src={color01} alt="" />
      <WaterColor2 src={color03} alt="" />
      <WaterColor3 src={color04} alt="" />
      <div className="about-container">
        <div className="about-first-section">
          <div>
            <h1>Tech as a gift</h1>
            <p>
              Hello, my name is Dali, I'm a brazilian developer. I have been working in the technology industry since 2016, and during that time I had the experience of developing a lot of cool products and other projects with a good impact.
            </p>
          </div>
          <img className="image-about" src={image10} alt="That's me, and I'm smiling"/>
        </div>
        <div className="about-gallery">
          <p>
            I was born in place called Paraíba and then went to live in a place called Tacaratu, in the interior of Pernambuco, where I spent a lot of time studying and started to dream of creating my first codes and through them to build a life different from the one I knew.
          </p>
          <p>
            For me, technology was a gift because, thanks to it, I was able to access the great world repository of knowledge, the Internet, and through it I got to know a new world, where I could be who I was and still start to develop my skills to build a career.
          </p>
        </div>
        <div className="about-gallery">
          <blockquote>
            <p>“It’s not what the world holds for you, it is what you bring to it. ”</p>

            — Anne Shirley, on Anne with an E.
          </blockquote>
          <img className="image-about" src={image03} alt="People happy at VaiNaWeb with course certificates"/>
        </div>
        <div className="about-gallery">
          <img className="image-about" src={image05} alt="People happy at Pyladies Rio" />
          <p>
            I believe that knowledge is the most empowering thing that we can share in the community. Just as technology was a gift that changed my life, I believe it can make a difference in other people's lives, so I love creating connections to share knowledge.
          </p>
        </div>
        <div className="about-gallery">
          <p>
            I love to share the things I learn, and I did it most of my time working as a teacher to inspire and encourage young people in areas of conflict and social vulnerability to change their lives and communities.
          </p>
          <img className="image-about" src={image09} alt="People happy at VaiNaWeb in a workshop about JS"/>
        </div>
        <div className="about-gallery">
          <img className="image-about" src={image07} alt="People happy at DjangoGirls Niteroi"/>
          <img className="image-about" src={image06} alt="People happy at Pyladies Rio"/>
        </div>
        <p>
          I also had the opportunity to make many significant exchanges of knowledge in some other code communities created to support underrepresented groups in technology, such as PyLadies, Django Girls and ReactLadies.
        </p>
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