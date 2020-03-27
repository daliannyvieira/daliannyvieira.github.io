import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "../components/image"
import SOCIAL from '../constants/social';

const Sidebar = ({author}) => (
  <StaticQuery
    query={SidebarQuery}
    render={() => {
      return (
        <aside className="sidebar">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
          <div>
            <Link style={{ boxShadow: `none` }} to={'/'}>
              <h1>
                Hey,
              </h1>
            </Link>
            <p>
              You can call me Dali. Someone who loves code, art, humanity, and believes that <strong>we need a more diverse software industry</strong> and that the development of new technologies as well as their access needs to be democratized. Today I teach code to inspire and encourage young people in territories of conflict and social vulnerability to change their lives and communities.
            </p>
          </div>
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
            <a href="https://www.gatsbyjs.org">Gatsby</a> by {author}.
          </footer>
        </aside>
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

export default Sidebar;