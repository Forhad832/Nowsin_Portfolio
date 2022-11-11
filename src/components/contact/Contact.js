import React from 'react'
import { AiFillHome, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaFlickr } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Contact = () => {
  return (

      <div className='container px-4 py-20 mx-auto' id='contact'>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className='bg-white' data-aos="fade-right" data-aos-duration="1000">
            <h2 className='text-xl font-semibold'>CONTACT ADDRESS</h2>
            <div className="w-32 mt-5 border border-black"></div>
                <div className="w-64 my-2 border border-black"></div>
                <div className="w-32 border border-black"></div>
            
            <div className="mt-5">
                <div className="flex items-start gap-5 mb-5">
                    <div className='p-2 border-2 border-gray-800'>
                        <AiFillHome size={25} />
                    </div>
                    <div>
                        <p className='text-lg'><small> Rangpur Sadar, Rangpur 5402,Dhaka Bangladesh</small></p>
                    </div>
                </div>
                <div className="flex items-start gap-5">
                    <div className='p-2 border-2 border-gray-800'>
                        <a href="mailto:nowsinakter83@gmail.com"><MdEmail size={25}/></a>
                    </div>
                    <div>
                        <p className='text-lg '><small>nowsinakter83@gmail.com</small></p>
                    </div>
                </div>
              
                <div className="flex gap-2 mt-10">
                    <li className='p-2 list-none border-2 border-gray-800 hover:bg-gray-800 transition-all cursor-pointer hover:text-[#fff]'><a href="https://www.facebook.com/profile.php?id=100067052881043"><BsFacebook  size={25}/></a></li>
                    
                    <li className='p-2 list-none border-2 border-gray-800 hover:bg-gray-800 transition-all cursor-pointer hover:text-[#fff]'><a href="https://www.flickr.com/photos/193248962@N08/albums?fbclid=IwAR3Wz6C-QUjdMKPo5jkUsXxM8DFz3-fbjLEq4RWFQpFNxvYsiC2nVic7BIw"><FaFlickr  size={25}/></a></li>
                    <li className='p-2 list-none border-2 border-gray-800 hover:bg-gray-800 transition-all cursor-pointer hover:text-[#fff]'><a href="https://www.linkedin.com/in/nowsin-akter-2a80b6206/?fbclid=IwAR3CXp7vS0n2To0VV06e8sf1M7gvPDWayp4YK6zzkfuuKcmP2fEFIgKgz44"><AiFillLinkedin  size={25}/></a></li>
                    <li className='p-2 list-none border-2 border-gray-800 hover:bg-gray-800 transition-all cursor-pointer hover:text-[#fff]'><a href="youtube.com/channel/UCW81En0DTPqrzMHAKgc8QaA"><AiFillYoutube  size={25}/></a></li>
                    <li className='p-2 list-none border-2 border-gray-800 hover:bg-gray-800 transition-all cursor-pointer hover:text-[#fff]'><a href="https://www.instagram.com/nowsinakter83/"><AiFillInstagram  size={25}/></a></li>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1000">
            <form>
             <div className="flex justify-between sm:flex-row flex-col  w-full gap-3 mb-10">
             <div className='md:w-[50%]' >
                <input className='w-full px-3 py-1 border border-gray-300 outline-none ' type="text" placeholder='Name' />
            </div>
            <div className='md:w-[50%]'>
                <input type="email" className='w-full px-3 py-1 border border-gray-300 outline-none' placeholder='Email' />
            </div>
             </div>
             <div className='mb-10'>
                <input type="text" placeholder='Subject'  className='w-full px-3 py-1 border border-gray-300 outline-none'/>
             </div>
             <div>
                <textarea className='w-full px-3 py-1 border border-gray-300 outline-none resize-none' cols="30" rows="10"></textarea>
             </div>
             <button type='submit' className='px-4 py-2 text-lg font-semibold text-white uppercase bg-black'>SEND</button>
            </form>
        </div>
      </div>
    </div>

  )
}

export default Contact
