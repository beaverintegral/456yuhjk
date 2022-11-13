import Wishlist from './Wishlist'
import React from 'react'

function ProductCard({ src, alt, value }) {
  return (
    <div className="product-card product-card__space">
      <div className="product-card_image-wrap">
        <img src={src} alt={alt} value={value} className="product-card_image" />
        <div className="product-card_wishlist-field">
          <Wishlist className="wishlist-icon__dark"></Wishlist>
        </div>
      </div>
      <span className="product-card_title">{value.brand}</span>
      <span className="product-card_description">{value.item}</span>
      <span className="product-card_description">
        {value.priceOld}
        {value.price}
      </span>
    </div>
  )
}

export default ProductCard
