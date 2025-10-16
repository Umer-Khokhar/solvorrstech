import React from 'react'
import {Section, Project, Heading} from '../'
import { projectsDetails } from '../../constants'

const Projects = () => {
  return (
    <div className={`!px-0 md:mt-12 lg:!py-10`}>
        <div className="container">
            <div className='lg:-mt-4 mt-20 lg:mb-[2rem]'>
            <Heading title={"Our Recent Projects"}/>
            </div>
            <div className="relative">
                {projectsDetails.map((project, index) => (
                    <div key={index}>
                    <Project title={project.title} desc={project.description} image={project.imageUrl} isRight={project.isRight} tech={project.techStack} features={project.features}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects