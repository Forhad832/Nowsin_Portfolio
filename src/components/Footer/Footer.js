import React from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
const Footer = () => {
  return (
    <div className='bg-[#393E46]'>
      <div className="container relative px-4 py-4 mx-auto">
        <div className="flex items-center text-sm sm:text-lg justify-center text-left sm:text-center text-white">
            <p>Copyright © 2022 FORHAD. All Rights Reserved.</p>
        </div>
        <div className="absolute right-0 bottom-3">
          <a  href="#home" className='flex items-center justify-center px-2 py-2 bg-white rounded'><BsFillArrowUpCircleFill size={30}/></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
