import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SOCIAL from '../constants/social';
import { rhythm } from '../utils/typography';

const mainBioQuery = graphql`
  query MainBioQuery {
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

const MainBio: React.FunctionComponent<{}> = () => {
  return (
    <StaticQuery
      query={mainBioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            className="main-bio-container"
            style={{
              marginBottom: rhythm(2.5),
            }}
          >
            <ul
              className="horizontal-links"
              style={{ marginBottom: rhythm(1) }}
            >
              {SOCIAL.map(s => (
                <li key={s.kind}>
                  <a className="u-no-box-shadow" href={s.url}>
                    <FontAwesomeIcon
                      icon={s.icon}
                      color="var(--gray)"
                      title={`Link to my ${s.kind}`}
                    />
                  </a>
                </li>
              ))}
            </ul>
              <Image
                className="avatar"
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                imgStyle={{
                  borderRadius: `50%`,
                }}
              />
            <div className="main-bio">
              <div className="rainbow">
                <h1 className="title">
                  Hello,
                </h1>
                <p className="subtitle">
                  You can call me Dali.
                </p>
              </div>
              <p>
                Someone who loves code, art, humanity, and believes that <strong>we need a more diverse software industry</strong> and that the development of new technologies as well as their access needs to be democratized. Today I teach code to inspire and encourage young people in territories of conflict and social vulnerability to change their lives and communities.
              </p>
            </div>            
          </div>
        );
      }}
    />
  );
};

export default MainBio;
