import { Link } from 'gatsby'
import React from 'react'
import PropTypes from 'prop-types'

const NavbarLink = ({ to, text }) => <Link className="navbar-item" to={to}>{text}</Link>

NavbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default NavbarLink
