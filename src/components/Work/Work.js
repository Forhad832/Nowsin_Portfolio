import React from 'react'
import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import { FaPrint } from 'react-icons/fa'
import { IoLogoDesignernews, IoShirtSharp } from 'react-icons/io5'
import BGIMG from '../../assets/bg-1.jpg'
const Work = () => {
  return (
    
    <div className='  bg-[rgba(0,0,0,0.8)]' style={{ backgroundColor:'rgba(0,0,0,0.8)',backgroundImage: `url(${BGIMG})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'top bottom',height:'auto',width:'100%',backgroundAttachment: 'fixed' }}>
        <div className='container px-4 py-20 mx-auto' id='services'>
         <div className="text-center">
        <h2 className='text-3xl md:text-4xl font-bold uppercase text-white'>What i do</h2>
        <div className="border border-white w-32 mx-auto mt-5"></div>
        <div className="border border-white w-64 mx-auto my-2"></div>
        <div className="border border-white w-32 mx-auto "></div>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="grid text-white grid-cols-1 gap-10 py-20 md:grid-cols-3">
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
                <h2 className='mb-4 text-xl font-semibold'>Adobe Photoshop</h2>
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
    </div>
  )
}

export default Work
