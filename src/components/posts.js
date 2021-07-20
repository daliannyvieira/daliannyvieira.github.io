import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media (min-width: 992px) {
    margin: 1rem 0;
  }

  h3 {
    padding: 0.55rem 0;
    margin: 0 0 1rem;
    width: 4rem;
    border-bottom: 5px solid transparent;

    @media (min-width: 992px) {
      margin: 0 1rem;
      padding: 1rem 0;
      position: absolute;
      text-align: right;
      top: 0;
      left: -5.45rem;
    }
  }

  &:nth-child(2) {
    h3 {
      border-bottom-color: #F583BA;
      color: #F583BA;
    }
  }
  &:nth-child(3) {
    h3 {
      border-bottom-color: #6DDAF2;
      color: #6DDAF2;
    }
  }
  &:nth-child(4) {
    h3 {
      border-bottom-color: #92E085;
      color: #92E085;
    }
  }
  &:nth-child(5) {
    h3 {
      border-bottom-color: #F5BD69;
      color: #F5BD69;
    }
  }
  &:nth-child(6) {
    h3 {
      border-bottom-color: #F2856D;
      color: #F2856D;
    }
  }
`;


const PostsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
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
  const groupBy = key => array =>
    array.reduce((objectsByKeyValue, obj) => {
      const value = obj[key];
      objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
      return objectsByKeyValue;
    }, {});

  const groupByYear = groupBy('year');
  const newPosts = groupByYear(posts)
  const fields = Object.keys(newPosts).reverse()

  return (
    <Wrap>
      <h1>Últimas postagens</h1>
      {fields.map(field => (
        <Container>
          <h3>{field}</h3>
          <PostsContainer>
            {newPosts[field].reverse().map(post => (
              <Post>
                <Link style={{ boxShadow: `none` }} to={`/blog${post.slug}`}>
                  <Cover>
                    <Legend>
                      {post.shortDate}
                    </Legend>
                    <Image
                      fluid={post.cover.childImageSharp.fluid}
                      alt={post.coverAuthor}
                    />
                  </Cover>
                  <h2>
                    {post.title}
                  </h2>
                </Link>
              </Post>
            ))}
          </PostsContainer>
        </Container>
      ))}
    </Wrap>
  )
}

export default Posts;