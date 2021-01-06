import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';

import Layout from "../components/layout"
import SEO from '../components/seo';
import pluralizeReadingTime from "../constants/pluralize-reading-time";
import styled from 'styled-components';
import color01 from '../images/color01.png'
import { Spring, animated } from 'react-spring/renderprops'

const WaterColor = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: -1;
  opacity: 0.5;
`;

const Container = styled(animated.div)`
  margin: 2.55rem 0;
  width: 90vw;
  border-radius: .5rem;
  position: relative;
  border-color: #ffb8d1;
  border-style: solid;
  border-width: 1px;
  background: #fff;
  padding: 1.25rem;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
  border-color: #f5f5f5;
  border-style: solid;
  border-width: 1px;

  @media (min-width: 992px) {
    max-width: 45vw;
  }
`;

export default ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { previous, next } = pageContext;
  const publicUrl = `https://daliannyvieira.github.io/blog${post.fields.slug}`;

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => setToggle(!toggle)

  useEffect(() => {
    handleToggle()
  }, [])

  return (
    <Layout>
      <Spring
        native
        to={{
          rotate: toggle ? '0deg' : '180deg',
          opacity: toggle ? 0: 1,
        }}
        onRest={() => console.log('done')}>
        {({ opacity }) => (
          <Container
            style={{
              opacity: opacity,
            }}
          >
          <SEO
            title={`${post.frontmatter.title}`}
            description={post.frontmatter.description || post.excerpt}
            keywords={post.frontmatter.keywords}
          />
          <WaterColor src={color01} alt="" onClick={handleToggle}/>
            <h1 style={{ margin: 0 }}>
              {post.frontmatter.published ? '' : 'DRAFT: '}
              {post.frontmatter.title}
            </h1>
            <small title={post.frontmatter.longDate}>
              {post.frontmatter.shortDate} &middot;{' '}
              {pluralizeReadingTime(post.timeToRead)}
            </small>
            <div style={{ marginTop: `1rem` }}>
              <Image
                fluid={post.frontmatter.cover.childImageSharp.fluid}
                alt={post.frontmatter.coverAuthor}
              />
            </div>
            <small>
              Photo by{' '}
              <a href={post.frontmatter.coverOriginalUrl}>
                {post.frontmatter.coverAuthor}
              </a>{' '}
            </small>
            <div
              style={{
                margin: `1rem 0`,
              }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
            <small>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={`https://twitter.com/search?q=${publicUrl}`}
              >
                Discuss on Twitter
          </a>{' '}
          &middot;{' '}
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={`https://github.com/daliannyvieira/blog/tree/master/content/blog${post.fields.slug
                  }`}
              >
                Edit this post on GitHub
          </a>
            </small>
            <hr />
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
                margin: 0,
              }}
            >
              <li>
                {previous && (
                  <Link
                    style={{ textDecoration: `none` }}
                    to={previous.fields.slug}
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link
                    style={{ textDecoration: `none` }}
                    to={next.fields.slug}
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </Container>
        )}
      </Spring>
    </Layout >
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        shortDate: date(formatString: "MMMM DD, YYYY")
        longDate: date(formatString: "MMMM DD, YYYY, h:mm:ss a")
        description
        categories
        cover {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverAuthor
        coverOriginalUrl
        keywords
        published
      }
    }
  }
`;