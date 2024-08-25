import React from 'react'

import "../assets/styles/team_member.css"

const TeamMember = ({ pic, name, title}) => {
  return (
    <div className='flex flex-col gap-2'>
        <div className='relative'>
            <div id='img_sub_bg' className='absolute top-0 bg-shedared rounded-tr-[4rem] h-4/5 w-4/5 -z-10'></div>
            <img src={pic} alt={name} />
        </div>
        <div className='flex flex-col gap-1 items-center '>
            <p className='font-semibold'>{name}</p>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default TeamMember