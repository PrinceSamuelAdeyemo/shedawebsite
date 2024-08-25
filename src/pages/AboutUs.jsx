import React from 'react'

// Components
import About from '../components/About'
import ShedaCourseActivities from '../components/ShedaCourseActivities'
import FAQ from '../components/FAQ'
import Conclusion from '../components/Conclusion'
import TeamMember from '../components/TeamMember'
import Project from '../components/project'

// Images
import MemberPic from "../assets/images/3d-portrait-businessman 1.png"
import greenPower from "../assets/images/WhatsApp Image 2024-01-29 at 22.18 1.png"
import reniFinance from "../assets/images/Reni finance 1.png"
import reniMail from "../assets/images/Renimail 1.png"
import reniTrust from "../assets/images/Reni Trust 1.png"
import reniStore from "../assets/images/Reni store 1.png"
import SAAF from "../assets/images/SAAF LOGO new 1.png"
import { HelmetProvider, Helmet } from 'react-helmet-async'


const AboutUs = () => {
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

      <div className='flex flex-col gap-10 items-center mb-10'>
        <About />

        <div className='flex flex-col items-center'>
          <p className='font-bold text-3xl my-4'>Meet the team</p>
          <div className='flex flex-col gap-4 lg:flex-row lg:gap-40'>
            <TeamMember pic={MemberPic} name={"Timothy Ayodele"} title={"CEO/Lead Developer"} />
            <TeamMember pic={MemberPic} name={"Timothy Ayodele"} title={"CEO/Lead Developer"} />
            <TeamMember pic={MemberPic} name={"Timothy Ayodele"} title={"CEO/Lead Developer"} />
          </div>
        </div>     

        <div id='howitworks' className='flex flex-col items-center gap-4 w-[90%]'>
          <p className='text-center text-sm font-semibold'>Products we've worked on</p>
          <p className='text-center text-4xl mb-4 font-bold'>Our works</p>
          <div className='flex flex-wrap justify-center gap-10 lg:h-20'>
            
            <Project img={greenPower} img_name={"Green Power"} />
            <Project img={reniFinance} img_name={"Reni Finance"} />
            <Project img={reniMail} img_name={"Reni Mail"} />
            <Project img={reniTrust} img_name={"Reni Trust"} />
            <Project img={reniStore} img_name={"Reni Store"} />
            <Project img={SAAF} img_name={"SAAF"} />
            
          </div>
        </div>
  

        <ShedaCourseActivities />      

        <div id='faq' className='flex flex-col gap-10 w-[90%] mb-4 md:w-[70%]'>
            <h1 className='font-semibold text-3xl'>Frequently Asked Questions (FAQs)</h1>
            <div className='faq-groupset'>
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

export default AboutUs