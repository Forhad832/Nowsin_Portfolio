import React, { useState } from 'react';
import Border from '../Border/Border';
import { clientdata } from './clientdata';
const alltype = ['illustrator', ...new Set(clientdata.map((item)=> item.type))]
console.log(alltype)
const Project = () => {
    
    const [project,setProject] = useState(clientdata);
    // eslint-disable-next-line no-unused-vars
    const [pro,setPro] = useState(alltype)
    const filtered = (type) =>{
       if(type === 'illustrator'){
        return setProject(clientdata)
       }
       const filter = clientdata.filter((item)=> item.type === type);
        return setProject(filter)
    }
  return (
    <div className='container px-4 py-20 mx-auto' id='works'>
      <div className="text-center">
        <h2 className='text-4xl font-bold uppercase'>AWESOME PROJECTS</h2>
        <Border/>
      </div>
    
     <div className='flex flex-wrap items-center justify-center gap-5 my-20'>
        {pro.map((item) => {
            
            return (
                <button className='bg-[#393E46]  text-white px-3 py-2 text-lg' onClick={()=>filtered(item)}>{item}</button>
            )
        })}
     </div>
      <div data-aos="fade-up" data-aos-duration="1000" className="grid grid-cols-1 gap-10 md:grid-cols-3">
        {project.map((item)=>{
            const {id,name,img,text} = item;
            return (
                <article data-aos="zoom-in" data-aos-duration="1000" key={id} className='relative'>
                    <img className='object-cover w-full md:w-96 md:h-96' src={img} alt={name} />
                    <div className='absolute top-[50%] translate-y-[-50%] flex items-center justify-center flex-col  text-center opacity-0 hover:opacity-100 cursor-pointer bg-[rgba(0,0,0,0.8)] w-full h-full'>
                        
                        <p className='text-lg text-white'>{text}</p>
                        <h2 className='px-4 py-2 mt-3 text-xl font-semibold text-white border-2 border-white'>{name}</h2>
                    </div>
                </article>
            )
        })}
      </div>
      <a data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1000" className='block px-6 py-2 mx-auto mt-20 text-xl font-semibold text-center uppercase border-2 border-gray-700 w-fit' href="https://www.flickr.com/photos/193248962@N08/albums/with/72177720301795446">View All</a>
    </div>
  )
}

export default Project
