import React from "react";


function Experience () {
   return (
       <div>
           <h1 className="mb-10 text-xl font-bold">Experiences</h1>
          
          
           <div className="w-full mx-3 mb-6">
               <span className="block font-semibold md:font-bold md:text-lg">Adobe Illustrator</span>
          
               <div className="w-full h-3 mt-2 bg-gray-500">
                   <span className="relative block h-full w-[98%] bg-green-600 animate-[progress .5s ease-in-out forwards] html">
                       <span className="absolute -right-3 -top-7 font-semibold px-2 bg-[crimson] z-10 text-white">98%</span>
                   </span>
               </div>
           </div>
           <div className="w-full mx-3 mb-6">
                <span className="font-semibold md:font-bold md:text-lg">Adobe photoshop</span>
                <div className="w-full h-3 mt-2 bg-gray-500 ">
                    <span className="bg-green-600 h-full w-[90%] block relative">
                    <span className="absolute -right-3 -top-7  font-semibold px-2 bg-[crimson] z-10 text-white">90%</span>
                    </span>

                </div>
           </div>
          <div className="w-full mx-3 mb-6">
            <span className="font-semibold md:font-bold md:text-lg">Adobe InDesign</span>
            <div className="w-full h-3 mt-2 bg-gray-500">
                <span className="h-full w-[60%] bg-green-600 block relative">
                    <span className="absolute -right-3 -top-7 bg-[crimson] text-white px-2">60%</span>
                </span>
            </div>
          </div>
           <div className="w-full mx-3 mb-6">
               <span className="font-semibold md:font-bold md:text-lg">Microsoft PowerPoint</span>
               <div className="w-full h-3 bg-gray-500">
                   <span className="h-full w-[80%] bg-green-600 block relative">
                       <span className="absolute -right-3 -top-7 px-2 text-white bg-[crimson]">80%</span>
                   </span>
               </div>
           </div>
          
           
       </div>
   )
}

export default Experience;