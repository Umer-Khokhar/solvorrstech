"use client";
import React from "react";
import { Section, Project, Heading } from "../";
import { projectsDetails } from "../../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className={`!px-0 md:mt-12 lg:!py-10 overflow-hidden`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="lg:-mt-4 mt-20 lg:mb-[4rem]"
        >
          <Heading title={"Our Recent Projects"} />
        </motion.div>
        <div className="relative">
          {projectsDetails.map((project, index) => (
            <div key={index}>
              <Project
                title={project.title}
                desc={project.description}
                image={project.imageUrl}
                isRight={project.isRight}
                tech={project.techStack}
                features={project.features}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
