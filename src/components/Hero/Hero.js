import React from 'react'
import fetchedImgSrc from '../../assets/bg.jpg'
const Hero = () => {
  return (
    <div  id='home' className='min-h-screen py-20 mt-20 overflow-hidden' style={{backgroundImage: `url(${fetchedImgSrc})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center center' }}>
      <div className='container px-4 py-20 mx-auto'>
      <div  className="grid grid-cols-1 md:grid-cols-2">
        <div data-aos="fade-down" data-aos-duration="1000" className='md:pr-20'>
            <h2 className='mb-4 text-3xl font-bold '>LET'S BUILD SOMETHING GREAT TOGETHER</h2>
            <p className='text-xl'>"I'm here for an amazing design" ,a professional graphic designer with 4+ years of experience.</p>
            <button className='px-5 py-2 my-5 text-lg font-bold border-2 border-gray-800'>LET'S TAlK</button>
        </div>
        <div>
            
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
 