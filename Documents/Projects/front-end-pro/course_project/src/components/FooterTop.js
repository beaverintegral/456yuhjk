import Subscription from './Subscription'
import React from 'react'

function FooterTop() {
  return (
    <div className="footer-top-wrapper">
      <div class="footer-top">
        <ul className="footer-top_nav">
          <li className="footer-top_nav-element">
            <a href="#">Customer support</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Size guides</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Shipping</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Returns</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Track my order</a>
          </li>
        </ul>
        <ul className="footer-top_nav">
          <li className="footer-top_nav-element">
            <a href="#">My account</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Order history</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Payment methods</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Account settings</a>
          </li>
          <li className="footer-top_nav-element">
            <a href="#">Favorites</a>
          </li>
        </ul>
        <Subscription></Subscription>
      </div>
    </div>
  )
}

export default FooterTop
