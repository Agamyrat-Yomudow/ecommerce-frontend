import React from 'react'
import bannerImg from '../../../assets/image-product.png'
import { FaShoppingBag } from 'react-icons/fa'

const Banner = () => {
  return (
    <div className='bg-[#1e28320d]  py-12 px-4 xl:px-28 text-black   '>
      <div className='flex py-28  flex-col md:flex-row-reverse items-center   justify-between gap-14 '>
      <div className='md:w-1/2'>
            <img src={bannerImg} alt="" />
        </div>
      <div className='md:w-1/2'>
            <h1 className='text-5xl font-light mb-5'>Collection</h1>
            <p className='text-lg mb-7'>you can explore ans shop many differnt collection from various barands here.</p>
            <button className='bg-black px-6 py-2  text-white rounded-sm font-semibold hover:bg-orange-500 flex items-center gap-2'><FaShoppingBag/> Shop now</button>
        </div>
        
      </div>
    </div>
  )
}

export default Banner
