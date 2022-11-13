import MainLogo from './MainLogo'
import Wishlist from './Wishlist'
import UserProfile from './UserProfile'
import Cart from './Cart'
import React from 'react'

function HeaderTop() {
  return (
    <div className="header-top">
      <div className="header-top_elements-wrapper">
        <MainLogo className="main-logo main-logo__light"></MainLogo>
        <div className="header-top_nav-wrapper">
          <Wishlist className="wishlist-icon wishlist-icon__light"></Wishlist>
          <UserProfile></UserProfile>
          <Cart></Cart>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
