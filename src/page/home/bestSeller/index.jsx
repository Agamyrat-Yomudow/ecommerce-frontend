import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,  Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const BestSeller = () => {
  const bestSeller = useSelector((state) => state.products.products.filter((product)=>product.status === 'Best Selers'));


  
         
  return (
    <div className=' max-w-screen-2xl container mx-auto px-4 xl:px-28'>
      <div className='text-center '>
        <h2 className='text-3xl font-semibold text-center my-8 capitalize'>Best sellers</h2>
        <p className='text-black/75  capitalize md:w-2/3 mx-auto md:mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ab nisi voluptatibus, aut consectetur numquam impedit! Fugit reiciendis, in labore accusamus dolor quibusdam earum perferendis aliquid repudiandae animi necessitatibus quidem.</p>
      </div>


      <div className='mb-16'>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          
        
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
          {bestSeller.map((product) => (
            <SwiperSlide key={product.id}>
               <div  key={product.id}>
           <Link to={`/shop/${product.id}`} >
           <img src={product.image} className='mx-auto w-full hover:scale-105 transition-all duration-300' alt="" />
        </Link>
        <div className='mt-4 px-4'>
          <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
          <div className='flex justify-between'>
            <p className='text-black/50'>{product.category}</p>
            <p className='font-semibold'>${product.price}</p>
          </div>
        </div>
      </div>
            </SwiperSlide>
          ))}
        
      </Swiper>
      </div>


    </div>
  )
}

export default BestSeller
