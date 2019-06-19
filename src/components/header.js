import React from 'react'
import { Link } from 'gatsby';

const Header = props => {
  return (
    <header>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </ul>
    </header>
  )
}

export default Header
