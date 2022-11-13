import tile1 from '../images/tile1.webp'
import tile2 from '../images/tile2.webp'
import React from 'react'

function PhotoTile() {
  return (
    <div className="tile-wrap">
      <div className="tile">
        <img
          src={tile1}
          alt="A Woman Resting On a Sofa"
          className="tile-image"
        />
        <img
          src={tile2}
          alt="A Woman Wearing Bright Printed Shirt, Skirt And a Bra"
          className="tile-image"
        />
      </div>
    </div>
  )
}

export default PhotoTile
