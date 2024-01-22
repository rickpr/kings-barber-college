import { Link } from "gatsby";
import React from "react";
import PropTypes from "prop-types";

/* TODO: inline override of padding is a result of refactoring
   to a ul for accessibilty purposes, would like to see a css
   re-write that makes this unneccesary.
 */

const NavbarLink = ({ to, text }) =>
  <li className="navbar-item" style={{ padding: "0px" }}>
    <Link className="navbar-item" to={to}>
      {text}
    </Link>
  </li>;

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default NavbarLink;
