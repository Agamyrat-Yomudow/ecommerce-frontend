import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser} from 'react-icons/fa'
import { categoryItems } from './utils'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [isMenu,setIsMenu]=useState(false)
    const handleClick=()=>{
        setIsMenu(!isMenu)
    }
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 mx-auto absolute top-0 left-0 right-0'>
        <nav className='flex items-center justify-between container pt-6 pb-3 '>
            <FaSearch className='w-5 h-5 hidden md:block cursor-pointer'/>
            <a href="/">
                <img src={logo} alt="" />
            </a>
            <div className='text-lg sm:flex gap-4 items-center hidden'>
                <a className='flex items-center gap-2' href="">
                    <FaUser/> Account
                </a>
                <a className='flex items-center gap-2' href="">
                    <FaShoppingBag/> Shopping
                </a>
            </div>
            <div className='md:hidden'>
                <button onClick={handleClick}>
                {isMenu ? <FaBars className='w-5 h-5 '/> : <FaTimes className='w-5 h-5 '/>}
                </button>
            </div>
        </nav>
        <hr />
        <div className='pt-4'>
            <ul className='lg:flex hidden items-center justify-between'>
            {
                categoryItems.map((item)=>(
                    <li className='hover:text-orange-500' key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))
            }
            </ul>
        </div>

         <div >
           <ul className={`bg-black rounded-lg text-white px-4 sm:hidden py-2 ${!isMenu ? '' : 'hidden'}`}>
            {
                categoryItems.map((item)=>(
                    <li className='hover:text-orange-500 my-3 cursor-pointer' key={item.title}>
                        <Link to={item.path}>{item.title}</Link>
                    </li>
                ))
            }
              </ul>
         </div>

    </header>
  )
}

export default Navbar
