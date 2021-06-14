import React, {useState} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MainBio from "../components/main-bio";
import styled from 'styled-components'

const Shape = styled.div.attrs(props => ({
  style: {
      background: props.color ? props.color : '#ffd670',
      width: props.size ? props.size : '3rem',
      height: props.size ? props.size : '3rem',
      left: props.x,
      top: props.y,
    },
  }))`
  position: absolute;
  z-index: 1;
  border-radius: 100%;
  opacity: 0.5;
}
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexPage = ({ data }) => {
  const { author } = data.site.siteMetadata

  let heightViewPort;
  let widthViewPort;

  const [coord, setCoord] = useState({x: 0, y: 0})
  const [shapes, setShapes] = useState([])

  if (typeof document !== `undefined`) {
    heightViewPort = document.documentElement.clientHeight
    widthViewPort = document.documentElement.clientWidth
  }

  const wrapY = (y) =>  y > 75 && (y + 75) < heightViewPort;
  const wrapX = (x) => x > 75 && (x + 75) < widthViewPort;

  const handleCursor = (e) => {
    if (wrapY(e.pageY) && wrapX(e.pageX)) {
      const coord = {
        x: e.pageX,
        y: e.pageY,
      }
      setCoord(coord)
    } else {
      setCoord({x: 0, y: 0})
    }
  }

  const handleClick = (e) => {
    if (wrapY(e.pageY) && wrapX(e.pageX)) {
      const colors = ['#70d5fc', '#f16da5', '#f7966f', '#ffd670', '#e6f06e']
      const sizes = [3, 4.5, 6, 7.5, 9]

      const random = Math.floor(Math.random() * colors.length)

      const shape = {
        x: e.pageX,
        y: e.pageY,
        size: sizes[random],
        color: colors[random]
      }

      setShapes([...shapes, shape])
    }
  }

  return (
    <Section onClick={handleClick} onMouseMove={handleCursor}>
      {coord.x !== 0 && (
        <Shape
          x={`calc(${coord.x}px - 1.5rem)`}
          y={`calc(${coord.y}px - 1.5rem)`}
        />
      )}
      {shapes && shapes.map((shape, index) => {
        return (
          <Shape
            key={index}
            color={shape.color}
            size={`${shape.size}rem`}
            x={`calc(${shape.x}px - ${shape.size / 2}rem)`}
            y={`calc(${shape.y}px - ${shape.size / 2}rem)`}
          />
        )
      })}
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
        <MainBio author={author}  />
      </Layout>
    </Section>
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

export default IndexPage;