import React, { useState } from 'react';

import Border from '../Border/Border';
import { clientdata } from './clientdata';
const Feedback = () => {
  // eslint-disable-next-line no-unused-vars
  const [review,setReview] = useState(clientdata)
  const [index,setIndex] = useState(0);
  const {id,name,img,text} = review[index];

  const checkNumber = (number) =>{
    if(number > review.length -1){
        return 0
    }
    if(number <0){
        return review.length -1
    }
    return number
}

  return (
 <div className="bg-slate-600">
    <div className='container px-4 py-20 mx-auto '>
    <div className="mb-16 text-center">
        <h2 className='text-4xl font-bold text-white uppercase'>CLIENT'S FEEDBACK</h2>
        <Border />
      </div>
     <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className='px-5 h-96 flex items-center justify-center flex-col bg-white rounded py-6 mx-auto text-center shadow-lg w-[100%] md:w-[40%]' key={id}>
      <h3 className='mb-10 italic font-semibold'>"{text}"</h3>
      <div className="flex items-center justify-center gap-5">  
     <div> <img className='w-12 h-12 mx-auto rounded-full' src={img} alt={name} /></div>
      <div>
      <h3 className='text-lg font-bold text-left'>{name}</h3>
      <p>Public Speaker</p>
      </div>
      </div>
      <div className="flex items-center justify-center gap-10 mt-10">
        <button className='px-3 py-2 text-white rounded bg-[#393E46]' onClick={()=>setIndex((prev)=> {return checkNumber(prev-1)})} >Prev</button>
        <button className='px-3 py-2 text-white rounded bg-[#393E46]' onClick={()=>setIndex((prev)=> {return checkNumber(prev+1)})} >Next</button>
      </div>
    </div>
   </div>
 </div>
  )
}

export default Feedback
