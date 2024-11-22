import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { motion } from "framer-motion";
import ShinyEffect from "./ShinyEffect.jsx";

import heroImg from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="mt-[25vh] max-w-[1200px] mx-auto relative p-6">
      <div className="grid md:grid-cols-2 place-items-center gap-8 p-2">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-whitish md:text-7xl text-5xl tracking-tight mb-4"
          >
            Hello, I am
          </motion.p>

          <TypeAnimation
            sequence={[
              "Fatima Badaoui.",
              1000,
              "a Full Stack Developer.",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-5xl font-bold text-primary-500 italic mb-6"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 mt-4"
          >
            I am a full stack developer based in Germany. But Frontend is my
            passion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineGithub />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#">
                <AiOutlineLinkedin />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.img
          src={heroImg}
          alt="hero image"
          className="w-[300px] md:w-[450px] rounded-3xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
