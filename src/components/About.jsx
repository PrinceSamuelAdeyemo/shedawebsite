import React from 'react'

import placeholderImg from '../assets/images/Asian  girl one finger pointing upwards smiling 1.png'

const About = () => {
  return (
    <div className='bg-shedared flex justify-center w-full'>
       <div className='flex flex-col gap-16 lg:flex-row items-center w-[85%] text-white pt-8 pb-10 justify-center'>
        
        <div className='w-full lg:w-1/2'>
          <div id='aboutus' className='flex flex-col gap-4'>
            <p className='font-semibold text-[2rem] lg:text-[5rem] '>About us</p>
            <p>At Sheda House, we believe in the transformative power of creativity and technology. Located at the heart of Ibadan, Nigeria, Sheda House is more than just a creative hub - it's a dynamic community where innovation thrives, ideas flourish, and connections are made.</p>
            <p> Our mission is simple: to provide a platform where individuals from all walks of life can come together to learn, create, and innovate.</p>
            <p>Whether you're a student eager to expand your skills, a community member looking to engage with like-minded individuals, or a client seeking cutting-edge solutions, Sheda House welcomes you with open arms.</p>
          </div>

          <div id='' className='flex flex-col gap-4'>
            <div className='flex flex-wrap gap-10 w-full py-2'>
              <div className='flex flex-col text-center'>
                <p className='font-bold text-4xl'>40+</p>
                <p className='font-medium text-[1rem]'>Applications developed</p>
              </div>
              <div className='flex flex-col text-center'>
                <p className='font-bold text-4xl'>80+</p>
                <p className='font-medium text-[1rem]'>Websites builts</p>
              </div>
              <div className='flex flex-col text-center'>
                <p className='font-bold text-4xl'>40K+</p>
                <p className='font-medium text-[1rem]'>Customers served</p>
              </div>
            </div>
            <button className='bg-white text-shedared text-xl font-semibold  rounded-xl py-2 px-7 mt-1 lg:mt-5 w-[10rem]'>Learn more</button>
          </div>
        </div>

        <div className='flex w-full gap-4 lg:w-1/2 h-[50vh]'>
          <img className='w-[30%] object-cover rounded-xl bg-white' src={placeholderImg} alt="" />
          <img className='w-[30%] object-cover rounded-xl bg-white' src={placeholderImg} alt="" />
          <img className='w-[30%] object-cover rounded-xl bg-white' src={placeholderImg} alt="" />
          
        </div>
        
      </div>
    </div>
  )
}

export default About