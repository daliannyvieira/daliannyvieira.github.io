import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Layout from "../components/layout"
import Seo from '../components/seo';
import pluralizeReadingTime from "../constants/pluralize-reading-time";
import styled from 'styled-components';
import { Spring, animated } from 'react-spring'

const Container = styled(animated.div)`
  width: 80vw;
  padding: 1rem;
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

  blockquote {
    margin: 0;
  }

  blockquote p {
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.65rem;
    display: inline-block;
    margin: 0.8em auto;
  }

  blockquote::before {
    content: "";
    display: block;
    width: 90%;
    margin: 2rem auto 1rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  blockquote::after {
    content: "";
    display: block;
    width: 90%;
    margin: 1rem auto 2rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  hr {
    display: block;
    width: 90%;
    margin: 1rem auto 4rem;
    border-top: 2px solid rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 992px) {
    max-width: 45vw;

    blockquote p {
      font-size: 1.7rem;
      line-height: 2rem;
    }
  }
`;

const Blog = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { previous, next } = pageContext;
  const publicUrl = `https://daliannyvieira.github.io/blog${post.fields.slug}`;

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
            <small title={post.frontmatter.longDate}>
              {post.frontmatter.shortDate} &middot;{' '}
              {pluralizeReadingTime(post.timeToRead)}
            </small>
            <h1 style={{ margin: '2rem auto' }}>
              {post.frontmatter.published ? '' : 'DRAFT: '}
              {post.frontmatter.title}
            </h1>
            {/* <div style={{ marginTop: `1rem` }}>
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
            </small> */}
            <div
              style={{
                margin: `1rem 0`,
              }}
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
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
            <small>
              <a
                target="_blank"
                rel="nofollow noopener noreferrer"
                href={`https://twitter.com/search?q=${publicUrl}`}
              >
                Discuss on Twitter
              </a>{' '}
            </small>
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

export default Blog