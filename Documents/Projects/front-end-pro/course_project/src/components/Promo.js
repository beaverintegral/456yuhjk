import { BrowserRouter, Link } from 'react-router-dom'
import React from 'react'

function Promo() {
  return (
    <div className="promo-wrapper promo-wrapper__space">
      <span className="promo_description">
        Up to 50% off all dresses when use code DRESSLOVER
      </span>
      <a href="#" className="promo_link">
        Shop dresses
      </a>
    </div>
  )
}

export default Promo
