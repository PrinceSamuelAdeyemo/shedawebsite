import React, {useState} from 'react'

const Project = ({img, img_name}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false)

  // Tooltip function not in use atm.
  var customTooltip = (event) => {
    setTooltipOpen(true)
  }

  return (
    <div className='relative' onMouseOver={(event) => setTooltipOpen(true)} onMouseLeave={(event) => setTooltipOpen(false)}>
        <img src={img} alt="Green Power" className='h-20' />
        <p className={`absolute top-0 text-center font-bold bg-white rounded shadow ${tooltipOpen ? 'flex' : 'hidden'} `}>{img_name}</p>
    </div>
  )
}

export default Project