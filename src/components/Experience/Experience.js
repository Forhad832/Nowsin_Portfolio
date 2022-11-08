import React from "react";


function Experience () {
   return (
       <div>
           <h1 className="text-xl font-bold mb-10">Experiences</h1>

           <div className="w-full  mb-6 mx-3">
               <span className="block text-lg font-semibold">Adobe Illustrator</span>
               <div className="h-3 w-full  mt-2 bg-gray-500">
                   <span className="relative block h-full w-[98%] bg-green-600 animate-[progress .5s ease-in-out forwards] html">
                       <span className="absolute -right-3 -top-7 font-semibold px-2 bg-[crimson] z-10 text-white">98%</span>
                   </span>
               </div>
           </div>
           <div className="w-full mb-6 mx-3">
                <span className="font-bold text-lg">Adobe photoshop</span>
                <div className="h-3 w-full bg-gray-500 mt-2 ">
                    <span className="bg-green-600 h-full w-[90%] block relative">
                    <span className="absolute -right-3 -top-7 font-semibold px-2 bg-[crimson] z-10 text-white">90%</span>
                    </span>

                </div>
           </div>
          <div className="w-full  mb-6 mx-3">
            <span className="font-bold text-lg">Adobe InDesign</span>
            <div className="h-3 w-full bg-gray-500 mt-2">
                <span className="h-full w-[60%] bg-green-600 block relative">
                    <span className="absolute -right-3 -top-7 bg-[crimson] text-white px-2">60%</span>
                </span>
            </div>
          </div>
           <div className="w-full  mb-6 mx-3">
               <span className="text-lg font-bold">Microsoft PowerPoint</span>
               <div className="h-3 w-full bg-gray-500">
                   <span className="h-full w-[80%] bg-green-600 block relative">
                       <span className="absolute -right-3 -top-7 px-2 text-white bg-[crimson]">80%</span>
                   </span>
               </div>
           </div>
           <div className="w-full  mb-6 mx-3">
            <span className="font-bold text-lg">Filmora</span>
            <div className="h-3 w-full bg-gray-500 mt-2">
                <span className="h-full w-[60%] bg-green-600 block relative">
                    <span className="absolute -right-3 -top-7 bg-[crimson] text-white px-2">60%</span>
                </span>
            </div>
          </div>
           
       </div>
   )
}

export default Experience;