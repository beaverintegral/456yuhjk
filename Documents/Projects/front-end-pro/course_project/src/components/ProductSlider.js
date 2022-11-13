import ProductCard from './ProductCard'
import React from 'react'
import ReactDOM from 'react-dom'
import patternedSuite from '../images/patternedSuite.webp'

function ProductSlider() {
  return (
    <ProductCard
      src={patternedSuite}
      alt={'A Woman Wearing a Mini Patterned Suite'}
      value={{
        brand: 'ZARA',
        item: 'Patterned suite',
        priceOld: null,
        price: '$75.90',
      }}
    ></ProductCard>
  )
}

export default ProductSlider
