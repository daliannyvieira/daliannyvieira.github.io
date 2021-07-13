import React from 'react';
import Seo from "../components/seo"
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import pluralizeReadingTime from "../constants/pluralize-reading-time";
import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Post = styled.article`
  position: relative;
  width: 100%;
  box-shadow: rgba(52, 61, 68, 0.1) 0px 1px 2px;
  background: #fff;
  border: 1px solid rgba(52, 61, 68, 0.05);
  border-bottom: 4px solid rgba(52, 61, 68, 0.05);
  border-image: initial;
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  margin: 0em 1em 1em auto;
  border-radius: 6px;
  padding: 0.25rem 0.85rem 0.25rem;
  cursor: pointer;

  @media (min-width: 992px) {
    margin: 0.45rem;
    max-width: 14rem;
  }

  &:hover {
    transform: scale(1.015);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 10px 30px -10px;
    border-radius: 0px 0px 6px 6px;
    border-bottom: 4px solid #92E085;
  }
  a {
    text-decoration: none;
  }

  h2 {
    font-size: 1.513rem;
    line-height: 1.65rem;
  }
`;

const Cover = styled.header`
  position: relative;
  img,
  div {
    height: 10rem;
    border-radius: 6px;
    margin: 1rem 0;
  }


  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #439145;
    height: 10rem;
    margin: 1rem 0;
    mix-blend-mode: screen;
    border-radius: 6px;
    opacity: 0.5;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2rem;
    border-radius: 6px;
    opacity: 0.65;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(249,249,246,0) 100%);
    z-index: 10;
  }
`;

const Legend = styled.small`
  position: absolute;
  bottom: 0;
  z-index: 10;
  right: 0;
  margin: 0.5rem;
  color: #f7c836;
  color: white;
  text-shadow: 1px 1px 2px black;
`;

const Posts = ({ posts }) => {
  return (
    <Container>
      <Seo
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
      {posts.map(({ node }) => {
        const title = node.frontmatter.title;
        const imageAuthor = node.frontmatter.coverAuthor;
        const { fluid } = node.frontmatter.cover.childImageSharp;

        return (
          <Post
            key={node.fields.slug}
          >
            <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
            <Cover>
              <Legend title={node.frontmatter.longDate}>
                {node.frontmatter.shortDate}
                {/* &middot;{' '} */}
                {/* {pluralizeReadingTime(node.timeToRead)} */}
              </Legend>
              <Image
                fluid={fluid}
                alt={imageAuthor}
              />
            </Cover>
            <h2>
              {title}
            </h2>
            {/* <p
              dangerouslySetInnerHTML={{
                __html: node.frontmatter.description || node.excerpt,
              }}
            /> */}
            </Link>
          </Post>
        );
      })}
    </Container>
  )
}

export default Posts;