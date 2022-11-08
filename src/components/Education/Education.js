import React from 'react'
import Experience from '../Experience/Experience'

const Education = () => {
  return (
    <div className='container px-4 pb-20 mx-auto' id='skill'>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2" >
        <div className='p-5 bg-white shadow'>
            <h2 className='mb-10 text-lg uppercase'>EDucation</h2>
            <div className="flex items-center justify-between gap-5">
                <div className='w-[30%]'>
                    <p className='mb-5'><small>2019-present</small></p>
                    <p><small className='font-bold '>Rangpur Polytechnic Institute</small></p>
                </div>
                <div className='w-[70%]'>
                    <h2 className='mb-5 text-2xl'><span className='font-bold'>Computer</span> Science &amp; Technology</h2>
                    <p><small className=''>I am Learing computer science and Technology at Rangpur Polytechnic Istitute, Rangpur</small></p>
                </div>
            </div>
            <div className="flex items-center gap-5 my-6">
            <div className='w-[30%]'>
                    <p className='mb-5'><small>2019</small></p>
                    <p><small className='font-bold '>Al-Falah Institute
Rangpur</small></p>
                </div>
                <div className='w-[70%]'>
                    <h2 className='mb-5 text-2xl font-bold'>SSC</h2>
                    <p><small className=''>I am Learing computer science and Technology at Rangpur Polytechnic Istitute, Rangpur</small></p>
                </div>
            </div>
        </div>
        <div className='p-5 bg-white shadow'>
            <Experience />
        </div>
      </div>
    </div>
  )
}

export default Education
