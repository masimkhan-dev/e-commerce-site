import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offer/Offers'
import NewCollections from '../Components/NewCollection/NewCollections'
import NewsLetters from '../Components/NewsLetter/NewsLetters'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetters/>
      
    </div>
  )
}

export default Shop
