import { motion } from "framer-motion";

import { experiences } from "../utils/data.js";

const Experience = () => {
  return (
    <div
      id="experience"
      className="mt-10 max-w-[1200px] mx-auto px-6 md:my-20 pt-10"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-gray-200 text-center mb-12 uppercase"
      >
        Experience
      </motion.h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="mb-8 flex flex-wrap md:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 * (index + 1) }}
              className="w-full md:w-1/3"
            >
              <p className="mb-2 text-gray-200">{exp.period}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 * (index + 1) }}
              className="w-full max-w-xl md:w-2/3"
            >
              <h4 className="mb-2 text-xl font-semibold text-gray-200">
                {exp.position} - <span className="text-sm">{exp.company}</span>
              </h4>
              <p className="text-gray-400 mb-4">{exp.description}</p>
              {exp.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded px-2 py-1 bg-gray-900/10 text-sm font-medium border border-primary-400"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
