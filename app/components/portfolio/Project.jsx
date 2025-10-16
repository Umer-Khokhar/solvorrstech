import React from 'react'
import { check } from '../../assets'

const Project = ({title, desc, image, isRight, tech, features}) => {
  return (
    <div className={`flex mb-20 lg:mb-24 flex-col lg:flex-row ${isRight ? "lg:flex-row-reverse": "lg:flex-row"} gap-5 lg:gap-[5.5rem] items-center justify-center`}>
        <div className="relative md:w-1/2">
            <img className='rounded-3xl w-full max-w-[34rem] h-full' loading='lazy' src={image} alt={title} />
        </div>
        <div className="relative md:w-1/2">
            <h4 className='h5 lg:h4 max-w-xl mb-4 md:mb-8'>{title}</h4>
            <p className='body-2 text-n-4 mb-4'>{desc}</p>
            <div className="technologies flex items-center gap-4 flex-wrap">
                <h5 className='h6'>Technologies:</h5>
                {tech.map((item, index) => (
                    <span key={index} className='body-2 font-code text-n-3'>{item  }</span>
                ))}
            </div>
            <div className="features mt-12">
                <ul className='flex flex-col gap-8'>
                    {features.map((item, index) => (
                        <li key={index} className='flex items-center gap-4 border-b border-n-1/10 pb-3'>
                                <img src={check} alt="check image" />
                                <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Project