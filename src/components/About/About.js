import React from 'react'
import Border from '../Border/Border'
import Education from '../Education/Education'

const About = () => {
  return (
  <div className="bg-slate-100" id='about'>
      <div className='container px-4 py-20 mx-auto '>
      <div className="text-center">
        <h2 className='text-4xl font-bold uppercase'>About Me</h2>
        <Border />
      </div>
    
    <div className="grid grid-cols-1 gap-10 py-20 md:grid-cols-2">
        <div>
            <h2 className='text-2xl'>WHO <span className='font-bold'>AM</span> I?</h2>
            <p className='my-4 text-lg '>This is Nowsin, a professional graphic designer with 4+ years of experience. I can design t-shirt designs, logos, banners, YouTube thumbnails, web banners, social media post designs, business card designs, flyer designs, brochure designs, and product packaging designs. Through Photoshop and Illustrator. Thanks </p>
           
            <button className='px-6 py-3 my-10 text-lg font-bold text-white uppercase bg-slate-900'>DOWnLaod My Cv</button>
        </div>
        <div>
            <h2 className='text-2xl'>EXPERT  <span className='font-bold'>IN</span></h2>
            <p className='my-4 text-lg '>Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.</p>
            <div className="grid grid-cols-3 gap-2">
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>T-shirt Design</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Logo Design</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Banner Design</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-white bg-green-700'>
                    <h2>YouTube thumbnails</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Web Banners</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-sm text-white bg-green-700'>
                    <h2>Social Media post Design</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-white bg-green-700'>
                    <h2>Business Card Design</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Flyer designs</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Brochure designs</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-white bg-green-700'>
                    <h2>Product packaging </h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Adobe Photoshop</h2>
                </div>
                <div className='flex items-center justify-center px-2 py-2 text-lg text-white bg-green-700'>
                    <h2>Adobe Illustrator</h2>
                </div>
            </div>
          
        </div>
    </div>
    </div>
    <Education />
  </div>
  )
}

export default About
