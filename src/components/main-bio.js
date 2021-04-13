import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SOCIAL from '../constants/social';
import me from '../images/me.jpg'
import styled, { keyframes } from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row-reverse;
    max-width: 55vw;
  }
`;

const Avatar = styled.div`
  max-width: 360px;
  
  img {
    border-radius: 6px;
    max-width: 100%;
  }
`;

const Sidebar = styled.aside`
  width: 100%;
  
  @media (min-width: 992px) {
    width: 55%;
    padding-right: 2rem;
  }

  h1 {
    margin: 2rem 0;
  }

  z-index: 1;
`;

const rainbow = keyframes`
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(-1turn);
  }
`

const Links = styled.ul`
  list-style: none;
  display: flex;
  margin: 1rem 0 2rem;
  padding: 0;

  li {
    list-style: none;
    display: flex;
    margin-right: 1rem;
  }
  
  li {
    background-image: -webkit-linear-gradient(92deg, #ff7a60, #ffb8d1);
    -webkit-background-clip: text;
    background-clip: text;
    &:nth-child(1) svg {
      color: #F583BA;
    }
    &:nth-child(2) svg {
      color: #6DDAF2;
    }
    &:nth-child(3) svg {
      color: #92E085;
    }
    &:nth-child(4) svg {
      color: #F5BD69;
    }
    &:nth-child(5) svg {
      color: #F2856D;
    }

    &:hover {
      transform: scale(1.25);
      animation: ${rainbow} 3s linear infinite;
    }
  }

`;

const MainBio = ({author}) => {
  return (
  <StaticQuery
    query={SidebarQuery}
    render={() => {
      return (
        <Section>
          <Avatar>
            <img src={me} alt="A picture with me smiling" />
          </Avatar>
          <Sidebar>
            <h1>
              Hi there! I’m Dali,
            </h1>
            <p>
              A senior backend developer at 1STi in Brazil.
              I have a huge experience in UI development and I love using technologies to solve real problems of the society.
            </p>
            <footer>
              <Links>
                {SOCIAL.map(s => (
                  <li key={s.kind}>
                    <a href={s.url}>
                      <FontAwesomeIcon
                        icon={s.icon}
                        title={`Link to my ${s.kind}`}
                      />
                    </a>
                  </li>
                ))}
              </Links>
              <small>© {new Date().getFullYear()}, Built with
            {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> by @daliannyvieira.</small>
            </footer>
          </Sidebar>
        </Section>
      );
    }}
  />
)};

const SidebarQuery = graphql`
  query SidebarQuery {
    avatar: file(absolutePath: { regex: "/profile-pic2.jpg/" }) {
      childImageSharp {
        fixed(width: 250, height: 250, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default MainBio;
