import React from 'react'
import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import { FaPrint } from 'react-icons/fa'
import { IoLogoDesignernews, IoShirtSharp } from 'react-icons/io5'
import Border from '../Border/Border'
const Work = () => {
  return (
    <div className='container px-4 py-20 mx-auto' id='services'>
         <div className="text-center">
        <h2 className='text-4xl font-bold uppercase'>What i do</h2>
        <Border />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 gap-10 py-20 md:grid-cols-3">
        <div className='flex items-start gap-10'>
            <div>
            <DiIllustrator size={60} />
            </div>
            <div>
                <h2 className='mb-4 text-xl font-semibold'>Adobe Illustrator</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Quam maiores est ipsum!</p>
            </div>
        </div>
        <div className='flex items-start gap-10'>
            <div>
            <DiPhotoshop size={60} />
            </div>
            <div>
                <h2 className='mb-4 text-xl font-semibold'>Adobe Illustrator</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Quam maiores est ipsum!</p>
            </div>
        </div>
        <div className='flex items-start gap-10'>
            <div>
            <IoShirtSharp size={60} />
            </div>
            <div>
                <h2 className='mb-4 text-xl font-semibold'> T-Shirt Design</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Quam maiores est ipsum!</p>
            </div>
        </div>
        <div className='flex items-start gap-10'>
            <div>
            <FaPrint size={60} />
            </div>
            <div>
                <h2 className='mb-4 text-xl font-semibold'>Print Design</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Quam maiores est ipsum!</p>
            </div>
        </div>
        <div className='flex items-start gap-10'>
            <div>
            <IoLogoDesignernews size={60} />
            </div>
            <div>
                <h2 className='mb-4 text-xl font-semibold'>Logo Design</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quas! Quam maiores est ipsum!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Work
