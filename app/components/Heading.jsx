import React from 'react'

const Heading = ({ className, title, text }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
        {title && <h2 className='h2 font-normal xl:text-center'>{title}</h2>}
        {text && <p className='body-2 mt-4 text-center text-n-3'>{text}</p>}
    </div>
  )
}

export default Heading