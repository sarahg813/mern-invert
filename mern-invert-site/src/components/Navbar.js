import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="navbar-brand">
          invert-site
        </Link>

        <div>
          <ul>
            <li>
              <Link to="/" className="nav-link">
                Studios
              </Link>
            </li>
            <li>
              <Link to="/create" className="nav-link">
                Create Studio
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
