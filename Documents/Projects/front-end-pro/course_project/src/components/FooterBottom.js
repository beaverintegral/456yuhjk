import MainLogo from './MainLogo'
import React from 'react'

function FooterBottom() {
  return (
    <div class="footer-bottom-wrapper">
      <div className="footer-bottom">
        <MainLogo className="main-logo main-logo__dark"></MainLogo>
        <span className="footer-bottom_copyright">
          (С) 2021 All rights reserved
        </span>
      </div>
    </div>
  )
}

export default FooterBottom
