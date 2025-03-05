import { motion } from "framer-motion";

import { projects } from "../utils/data.js";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="mt-10 max-w-[1000px] mx-auto px-6 md:my-20 py-10"
    >
      <div className="mt-15 pt-10">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-gray-200 text-center mb-12 uppercase mt-10"
        >
          Portfolio
        </motion.h2>
        {projects.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            transition={{ duration: 1, delay: 0.1 * index }}
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            <div className="w-full md:w-1/3 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-primary-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded px-2 py-1 bg-gray-900/10 text-sm font-medium border border-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    className="px-4 py-2 bg-primary-400 text-gray-200 rounded-lg hover:bg-primary-200 transition-all duration-300 ease-in-out"
                  >
                    View Site
                  </a>
                )}
                <a
                  href={project.links.github}
                  target="_blank"
                  className="px-4 py-2 bg-primary-400 text-gray-200 rounded-lg hover:bg-primary-200 transition-all duration-300 ease-in-out"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
