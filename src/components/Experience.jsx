import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: "Company 1",
      position: "Position 1",
      period: "Period 1",
      description: "Description 1",
    },
    {
      company: "Company 2",
      position: "Position 2",
      period: "Period 2",
      description: "Description 2",
    },
    {
      company: "Company 3",
      position: "Position 3",
      period: "Period 3",
      description: "Description 3",
    },
  ];

  return (
    <div className="mt-10 max-w-[1200px] mx-auto px-6 md:my-20 pt-10">
      <h1 className="text-4xl text-gray-200 text-center mb-12">Experience</h1>
      <motion.div className="space-y-8" initial="hidden" animate="visible">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="max-w-[600px] mx-auto border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
          >
            <h2 className="text-gray-100 text-2xl font-semibold">{exp.company}</h2>
            <p className="text-gray-300">{exp.period}</p>
            <p className="text-gray-400 mt-4">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
