import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';
import Logo from '../../content/assets/cat.svg';
import SOCIAL from '../constants/social';

interface LayoutProps {
  location: Location;
  title: string;
  children: React.ReactNode;
}

function isActive (path) {
  return location.pathname === path;
}

const Layout: React.FunctionComponent<LayoutProps> = ({
  location,
  title,
  children,
}) => {

  console.log(isActive('/'))

  return (
    <div className="main-container">
      <header>
        <div className="logo rainbow">
          <Logo
            style={{
              verticalAlign: 'middle',
              marginRight: rhythm(1 / 4),
            }}
          />
          <h2
            style={{
              ...scale(0.3),
              display: 'inline',
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h2>
        </div>
        <ul className="horizontal-links">
          <li>
            <Link style={isActive('/') ? { textDecoration: 'underline' } : null} to={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link style={isActive('/posts') ? { textDecoration: 'underline' } : null} to={'/posts'} to={'/posts'}>
              Posts
            </Link>
          </li>
        </ul>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} Dali
        <div>
          {SOCIAL.map((s, idx) => (
            <React.Fragment key={s.kind}>
              <a href={s.url}>{s.kind}</a>
              {idx === SOCIAL.length - 1 ? '' : <span> / </span>}
            </React.Fragment>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Layout;