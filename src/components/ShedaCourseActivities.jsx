import React from 'react'

const ShedaCourseActivities = () => {
  return (
    <div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-center font-semibold text-3xl'>What we do</h1>
          <p className='text-center text-sm font-semibold'>Providing everything you need for a successful creative journey</p>
        </div>
        <div id='offering' className='flex flex-col lg:flex-row justify-center items-center gap-4 w-[90%] lg:gap-8'>
          <div className='w-1/2'>
            IMAGES HERE
          </div>
          <div className='w-1/2'>
            TEXT HERE
          </div>
        </div>
    </div>
  )
}

export default ShedaCourseActivities