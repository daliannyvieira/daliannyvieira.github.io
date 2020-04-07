import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <nav>
    <div className="container">
      <span>
        <Link to="/">
          Dalianny Vieira
        </Link>
      </span>
      <ul>
        <li>
          <Link to="/">
            home
          </Link>
        </li>
        <li>
          <Link to="/posts">
            posts
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
