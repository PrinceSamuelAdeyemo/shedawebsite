// React imports
import React from 'react'
import { HelmetProvider, Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// Components
import About from '../components/About';
import FAQ from '../components/FAQ';
import Review from '../components/Review';
import Conclusion from '../components/Conclusion';
import ShedaCourseActivities from '../components/ShedaCourseActivities';
import Project from '../components/Project';

// Styling
import "../assets/styles/homepage.css"

// Images
import peoplePhoto from "../assets/images/image 8.png"
import greenPower from "../assets/images/WhatsApp Image 2024-01-29 at 22.18 1.png"
import reniFinance from "../assets/images/Reni finance 1.png"
import reniMail from "../assets/images/Renimail 1.png"
import reniTrust from "../assets/images/Reni Trust 1.png"
import reniStore from "../assets/images/Reni store 1.png"
import SAAF from "../assets/images/SAAF LOGO new 1.png"

//Icons
import img1 from "../assets/images/Ellipse 4.png"
// Intro side


const Homepage = () => {


  return (
    <HelmetProvider>
      <Helmet>
          <title></title>
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <link href="fontawesome-icons\css\all.css" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


          <link rel="stylesheet" href="index.css" type="text/css" />
          <link rel="stylesheet" href="output.css" type="text/css" />

          <script src="landingpage.js"></script>
      </Helmet>

      <div className='flex flex-col gap-10 justify-center items-center pb-10 bg-shedapagebg w-screen overflow-x-hidden pt-20 lg:pt-10 xl:pt-20 md:gap-14 lg:gap-20'>

        <div id='intro-div' className='flex flex-col gap-6 justify-center items-center rounded-2xl h-[100vh] w-[90%] relative'>
          <div className='flex flex-col items-center gap-8 w-[95%] sm:w-[60%] md:w-[50%] lg:w-[90%]'>
            <div className='flex gap-2 items-center justify-between px-2 outline-white border-2 border-shedagray rounded-2xl h-12 w-[85%] sm:w-[65%] lg:w-[30%] xl:w-[27%]'>
              <p className='text-black bg-shedagray rounded-[0.5rem] w-24 text-center'>Trusted by</p>
              <p className='text-shedared font-bold text-[70%] md:text-md'>400+ Students</p>
              <div className='flex items-center z-10 relative w-[20%] md:w-[25%] lg:w-[20%] h-full'>
                <img className='absolute h-2/3' src={img1} alt="" />
                <img className='absolute h-2/3 left-3 md:left-4' src={img1} alt="" />
                <img className='absolute h-2/3 left-6 md:left-8' src={img1} alt="" />
              </div>
            </div>
            <div className='text-center flex flex-col gap-4 md:w-[50vw] md:gap-8 xl:w-[40vw] z-10'>
              <h1 className=' font-bold text-4xl lg:text-6xl'>The Best Creative Community in Ibadan</h1>
              <p className='font-bold text-shedagray'>Sheda House Is a Creative Hub Located At The Heart Of Ibadan. We Are A Team of Creatives. Join Sheda House to interact, play, learn, create and discover.</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2 w-[90%] lg:flex-row md:w-[100%] lg:w-[65%] xl:w-[40%]'>
              <button className='text-white text-[15px] bg-shedared font-bold rounded-[0.5rem] w-full lg:w-1/2 h-[6vh] px-10 z-10'>Join Academy</button>
              <button className='bg-white text-shedared text-bold border-2 border-white rounded-[0.5rem] w-full lg:w-1/2 h-[6vh] z-10'>Download our portfolio</button>
            </div>
          </div>
          
          <img src={peoplePhoto} className='object-fill w-[95%]' alt="Sheda community" />
          
        </div>
          
        <div id='howitworks' className='flex flex-col items-center gap-4 w-[90%]'>
          <p className='text-center text-sm font-semibold'>Products we've worked on</p>
          <p className='text-center text-4xl mb-4 font-bold'>Our works</p>
          <div className='flex flex-wrap justify-center gap-10 lg:gap-24 lg:h-20'>
            
            <Project img={greenPower} img_name={"Green Power"} />
            <Project img={reniFinance} img_name={"Reni Finance"} />
            <Project img={reniMail} img_name={"Reni Mail"} />
            <Project img={reniTrust} img_name={"Reni Trust"} />
            <Project img={reniStore} img_name={"Reni Store"} />
            <Project img={SAAF} img_name={"SAAF"} />
            
          </div>
        </div>

        <About />

        <ShedaCourseActivities />

        <div id='review' className='flex flex-col gap-3 w-[90%] lg:w-[80%]'>
          <h1 className='text-3xl font-semibold text-center mb-2'>Feedback from our Connections</h1>
          <div className='flex flex-col flex-wrap gap-4 md:flex-row md:justify-center'>
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>

        <div id='faq' className='flex flex-col gap-10 w-[90%] mb-4 md:w-[70%] items-center'>
          <h1 className='font-semibold text-3xl '>Frequently Asked Questions (FAQs)</h1>
          <div className='faq-groupset w-[95%]'>
            <div className='faq-group flex flex-col gap-10 items-center'>
                <FAQ />
                <FAQ />
                <FAQ />
            </div>
          </div>
        </div>

        <Conclusion />
      </div>
</HelmetProvider>
  )
}

export default Homepage