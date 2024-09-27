import React from 'react'
import img1 from "../assets/images/Ellipse 4.png"

const Review = () => {
  return (
    <div className='flex flex-col gap-4 rounded-xl shadow w-full md:w-[20rem] lg:w-[16rem] xl:w-[20rem] bg-white p-4'>
      <div>
        <p className='text-sm'>Attending the training academy at Sheda House was a game-changer for me. The instructors are knowledgeable, and the hands-on approach really helped me grasp complex concepts</p>
      </div>
      <div className='flex items-center gap-2 w-full h-10'>
        <img className='w-10 object-fill' src={img1} alt="image" />
        <div className=''>
          <p className='font-bold'>Alex Stand</p>
          <p className='text-shedagray'>Student</p>
        </div>
      </div>
    </div>
  )
}

export default Review