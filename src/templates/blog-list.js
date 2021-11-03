import React from 'react';
import styled from 'styled-components'
import { navigate } from 'gatsby';
import Image from 'gatsby-image';
import { chooseColor, groupBy } from '../utils/chooseColor'

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media (min-width: 992px) {
    margin: 1rem 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  padding: 0.55rem 0;
  margin: 0 0 1rem;
  width: 4rem;
  border-bottom: 5px solid transparent;
  color: ${props => props.color};
  border-bottom-color: ${props => props.color};

  @media (min-width: 992px) {
    margin: 0 1rem;
    padding: 1rem 0;
    position: absolute;
    text-align: right;
    top: 0;
    left: -5.45rem;
  }
`;

const Post = styled.article`
  position: relative;
  padding: 0.25rem 0.85rem 0.25rem;
  margin: 0em 1em 1em auto;
  width: 100%;
  border: 1px solid var(--color-backgroundHigh);
  border-bottom-width: 4px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);
  cursor: pointer;
  background: var(--color-backgroundHigh);
  transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;
  border-radius: 6px;
  
  @media (min-width: 992px) {
    margin: 0.45rem;
    min-height: 320px;
    width: 14rem;
  }
  
  &:hover {
    border-bottom-color: ${props => props.color};
    border-bottom-width: 10px;
  }
  
  a {
    text-decoration: none;
  }
`;

const PostCover = styled.header`
  position: relative;
  img,
  div {
    height: 8rem;
    border-radius: 6px;
    margin: 1rem 0;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    border-radius: 6px;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(249,249,246,0) 100%);
    z-index: 1;
    opacity: 0.85;
  }
`;

const Legend = styled.small`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  text-shadow: 1px 1px 2px black;
  z-index: 1;
  color: var(--color-secondary);
`;

const PostTitle = styled.h2`
  font-size: 1.513rem;
  line-height: 1.65rem;
  color: ${props => props.color};
  border-bottom-color: ${props => props.color};
`;

const renderPost = (post, color) => (
  <Post color={color} onClick={() => navigate(post.slug)}>
    <PostCover>
      <Legend>
        {post.shortDate}
      </Legend>
      <Image
        fluid={post.cover.childImageSharp.fluid}
        alt={post.coverAuthor}
      />
    </PostCover>
    <PostTitle color={color}>
      {post.title}
    </PostTitle>
  </Post>
)

const Posts = ({ posts }) => {
  const postsList = groupBy(posts, 'year')
  const fields = Object.keys(postsList).reverse()

  return (
    <Section>
      <h1>Últimas postagens</h1>
      {fields.map((field, index) => {
        const color = chooseColor(index);
        return (
          <Wrapper color={color}>
            <Title color={color}>{field}</Title>
            <Content>
              {postsList[field].map(post => (
                renderPost(post, color)
              ))}
            </Content>
          </Wrapper>
        )
      })}
    </Section>
  )
}

export default Posts;