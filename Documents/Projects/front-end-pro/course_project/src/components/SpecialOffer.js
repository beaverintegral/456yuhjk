import ecoAware from '../images/ecoAware.webp'
import React from 'react'

function SpecialOffer() {
  return (
    <div className="special-offer-wrapper">
      <div className="special-offer">
        <div className="special-offer_text">
          <h1 className="special-offer_text-title">
            Eco Aware brands: Exclusively at Dresnote
          </h1>
          <span className="special-offer_text-description">
            Science Story is a collaboration between Dressnote and creative
            thinkers, researchers and brands who are developing cutting-edge
            materials designed to address the environmental impacts of the
            textile industry.
          </span>
          <a href="#" className="button button__dark">
            Shop Eco collection
          </a>
        </div>
        <img
          src={ecoAware}
          alt="A Smiling Woman Wearing a Green Blouse"
          className="special-offer_image"
        />
      </div>
    </div>
  )
}

export default SpecialOffer
