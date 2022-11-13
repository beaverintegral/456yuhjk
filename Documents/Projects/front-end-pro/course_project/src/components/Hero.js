import CategoryCard from './CategoryCard'
import dresses from '../images/dresses.webp'
import skirts from '../images/skirts.webp'
import tops from '../images/tops.webp'
import bags from '../images/bags.webp'
import swimwear from '../images/swimwear.webp'
import shoes from '../images/shoes.webp'
import React from 'react'

function Hero() {
  return (
    <div className="hero-wrapper hero-wrapper__space">
      <CategoryCard
        src={dresses}
        alt={'A Woman Wearing a Dress'}
        value={'Dresses'}
      ></CategoryCard>
      <CategoryCard
        src={skirts}
        alt={'A Woman Wearing a Mini Skirt'}
        value={'Skirts'}
      ></CategoryCard>
      <CategoryCard
        src={tops}
        alt={'A Woman Wearing a Top With a Lantern Sleeves'}
        value={'Tops'}
      ></CategoryCard>
      <CategoryCard
        src={bags}
        alt={'A Bag Standing on a Concrete Cube'}
        value={'Bags'}
      ></CategoryCard>
      <CategoryCard
        src={swimwear}
        alt={'A Woman Wearing a Bikini'}
        value={'Swimwear'}
      ></CategoryCard>
      <CategoryCard
        src={shoes}
        alt={'A Woman Wearing Shoes With Buckles and Stones'}
        value={'Shoes'}
      ></CategoryCard>
    </div>
  )
}

export default Hero
