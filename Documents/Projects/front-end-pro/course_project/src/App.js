import './App.scss'
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PhotoTile from './components/PhotoTile'
import SpecialOffer from './components/SpecialOffer'
import Divider from './components/Divider'
import BrandPanel from './components/BrandPanel'
import Footer from './components/Footer'
import ProductSlider from './components/ProductSlider'

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <PhotoTile></PhotoTile>
      <SpecialOffer></SpecialOffer>
      <Divider></Divider>
      <BrandPanel></BrandPanel>
      <Footer></Footer>
      <ProductSlider></ProductSlider>
    </>
  )
}

export default App
