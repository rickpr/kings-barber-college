import React, { useState } from 'react'
import { Link } from 'gatsby'
import NavbarLink from './NavbarLink'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav
      className="navbar is-transparent container"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" title="Logo">
          KINGS BARBER COLLEGE
        </Link>
        {/* Hamburger menu */}
        <button
          className={`navbar-burger burger ${isActive && 'is-active'}`}
          aria-expanded={isActive}
          onClick={() => setIsActive(!isActive)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div
        id="navMenu"
        className={`navbar-menu ${isActive && 'is-active'}`}
      >
        <div className='navbar-end'>
          <NavbarLink to="/about" text="About" />
          <NavbarLink to="/products" text="Products" />
          <NavbarLink to="/blog" text="Blog" />
          <NavbarLink to="/contact" text="Contact" />
          <NavbarLink to="/contact/examples" text="Form Examples" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
