import React from 'react'
import Banner from './banner'
import Category from './category'
import Products from './products'
import Collections from './collections'
import BestSeller from './bestSeller'

const Home = () => {
  return (
    <div >
      <Banner/>
      <Category/>
      <Products/>
      <Collections/>
      <BestSeller/>
    </div>
  )
}

export default Home
