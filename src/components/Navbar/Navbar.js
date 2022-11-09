import React, { useState } from 'react';

import { GoThreeBars } from 'react-icons/go';
import { MdClose } from 'react-icons/md';
import Logo from '../../assets/nafi.jpg';
const Navbar = () => {
  const [nav,setNav] = useState(false);
  return (
    <nav className='fixed top-0 z-50 w-full py-4 bg-white h-18'>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
            <a href="home" className='font-semibold'>
              <div className="flex gap-4">
              <div>
                  <img src={Logo} alt="logo" className='object-contain w-12 h-12 rounded-full' />
                </div>
                <div>
                <p className='text-lg'>Nowsin Akter</p>
                <p className='text-sm'><small>Graphic Designer</small></p>
                </div>
              
              </div>
            </a>
            <ul className='items-center justify-around hidden gap-5 md:flex'>
                <li><a className='text-lg font-semibold' href="#home">Home</a></li>
                <li><a className='text-lg font-semibold' href="#about">About</a></li>
                <li><a className='text-lg font-semibold' href="#skill">Skills</a></li>
                <li><a className='text-lg font-semibold' href="#services">Services</a></li>
                <li><a className='text-lg font-semibold' href="#works">Works</a></li>
                
                <li><a className='text-lg font-semibold' href="#contact">Contact</a></li>
            </ul>
          {nav &&   <ul className='absolute flex flex-col items-center justify-center w-full h-screen gap-5 transition bg-white top-14 md:hidden'>
                <li><a className='text-lg font-semibold' href="#home">Home</a></li>
                <li><a className='text-lg font-semibold' href="#about">About</a></li>
                <li><a className='text-lg font-semibold' href="#skill">Skills</a></li>
                <li><a className='text-lg font-semibold' href="#services">Services</a></li>
                <li><a className='text-lg font-semibold' href="#works">Works</a></li>
                
                <li><a className='text-lg font-semibold' href="#contact">Contact</a></li>
            </ul>}
            <div onClick={()=>setNav(!nav)} className='cursor-pointer md:hidden'>
             {nav ? <MdClose  size={30}/>:  <GoThreeBars size={30} />}
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
