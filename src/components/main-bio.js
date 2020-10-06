import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SOCIAL from '../constants/social';
import styled from 'styled-components';
import me from '../images/me.jpg'

const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row-reverse;
    height: 90vh;
    max-width: 55vw;
  }
`;

const Avatar = styled.div`
  @media (min-width: 992px) {
    width: 360px;
  }
`;

const Content = styled.div`
  width: 100%;
  
  @media (min-width: 992px) {
    width: 55%;
    padding-right: 2rem;
  }
`;

const MainBio = ({author}) => (
  <StaticQuery
    query={SidebarQuery}
    render={() => {
      return (
        <Sidebar>
          <Avatar>
            <img src={me} alt="A picture with me smiling" />
          </Avatar>
          <Content>
            <h1>
              Hello, I'm Dali.
            </h1>
            <p>
              Someone who loves code, art, humanity, and believes that <strong>we need a more diverse software industry</strong> and that the development of new technologies as well as their access needs to be democratized.
            </p>
            <footer>
              <ul
                className="horizontal-links"
              >
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
              </ul>
              © {new Date().getFullYear()}, Built with
            {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> by @{author}.
            </footer>
          </Content>
        </Sidebar>
      );
    }}
  />
);

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
