import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import styled, { keyframes } from 'styled-components'
import { Spring, animated } from 'react-spring'

import Seo from '../components/seo';
import Layout from "../components/layout"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SOCIAL from '../constants/social';
import pluralizeReadingTime from "../constants/pluralize-reading-time";

const Container = styled(animated.div)`
  padding: 2rem 1rem 2rem;
  width: 90vw;
  border-radius: .5rem;
  position: relative;
  border-color: #ffb8d1;
  border-style: solid;
  border-width: 1px;
  background: #fff;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
  border-color: #f5f5f5;
  border-style: solid;
  border-width: 1px;

  strong {
    font-weight 800;
  }

  @media (min-width: 992px) {
    padding: 4rem 2.45rem 4rem;
    max-width: 55vw;

    p, ul {
      font-size: 1.15rem;
      line-height: 1.95rem;
    }

    blockquote p {
      font-size: 1.75rem;
      line-height: 2.25rem;
    }
  }

  small a {
    color: #6DDAF2;
  }

  svg {
    color: #6DDAF2;
  }
  `;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

const rainbow = keyframes`
  50% {
    transform: translateY(-20px) scaleY(0.75);
  }
`

const Twitter = styled.div`
  position: absolute;
  bottom: 5%;
  right: 100%;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  border-color: #6DDAF2;
  border-style: solid;
  border-width: 1px;
  padding: 0.75rem;
  cursor: pointer;
  transition: all 0.5s ease;
  background: #6DDAF2;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    color: #fff;
  }

  @media (min-width: 992px) {
    background: #6DDAF2;
    animation: ${rainbow} 3s linear infinite;

    svg {
      color: transparent;
    }

    &:hover {
      svg {
        color: #6DDAF2;
      }
      width: 50px;
      background: #fff;
      transform: translateY(0) scaleY(1);
    }
  }
`;

const Blog = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { previous, next } = pageContext;
  const publicUrl = `https://daliannyvieira.github.io${post.fields.slug}`;

  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    function handleToggle() {
      setToggle(false)
    }

    handleToggle();
  }, []);

  return (
    <Layout>
      <Spring
        native
        to={{
          rotate: toggle ? '0deg' : '180deg',
          opacity: toggle ? 0: 1,
        }}
        >
        {({ opacity }) => (
          <Container
            style={{
              opacity: opacity,
            }}
          >
          <Seo
            title={`${post.frontmatter.title}`}
            description={post.frontmatter.description || post.excerpt}
            keywords={post.frontmatter.keywords}
          />
            <Title>
              {post.frontmatter.published ? '' : 'DRAFT: '}
              {post.frontmatter.title}
            </Title>
            <small>
              {post.frontmatter.shortDate} — {' '}
              {pluralizeReadingTime(post.timeToRead)}
            </small>
            <article dangerouslySetInnerHTML={{ __html: post.html }} />
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
            <Twitter>
              <div>
                <a
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  href={`https://twitter.com/intent/tweet?text=${publicUrl}`}
                >
                  <FontAwesomeIcon
                    size={SOCIAL[1].size}
                    icon={SOCIAL[1].icon}
                    title={`Link to my ${SOCIAL[1].kind}`}
                  />
                </a>
              </div>
            </Twitter>
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
        shortDate: date(locale: "pt-br", formatString: "MMMM, YYYY")
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

export default Blog