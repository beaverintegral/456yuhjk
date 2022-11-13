import React from 'react'

function CategoryCard({ src, value, alt }) {
  return (
    <div className="category-card category-card__space">
      <img src={src} alt={alt} value={value} className="category-card_image" />
      <span className="category-card_title">{value}</span>
    </div>
  )
}

export default CategoryCard
