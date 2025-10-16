import React from 'react'
import { notification1 } from '../assets'

const Notification = ({ className, title}) => {
  return (
    <div className={`${className || ""} flex gap-4`}>
        <img src={notification1} alt="image" className='rounded-xl' width={65} height={65} />
        <h4>{title}</h4>
    </div>
  )
}

export default Notification