import Search from './Search'
import { NavLink } from 'react-router-dom'
import React from 'react'

function HeaderNav() {
  return (
    <nav className="header-nav-wrapper">
      <ul className="header-nav">
        <li className="header-nav_element">New in</li>
        <li className="header-nav_element">Clothing</li>
        <li className="header-nav_element">Shoes</li>
        <li className="header-nav_element">Accessories</li>
        <li className="header-nav_element">Brands</li>
        <li className="header-nav_element">Sale</li>
      </ul>
      <Search></Search>
    </nav>
  )
}

export default HeaderNav
