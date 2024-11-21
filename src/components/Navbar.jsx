import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      x: 0,
      transition: { stiffness: 20, damping: 15 },
    },
    closed: {
      x: "-100%",
      transition: { stiffness: 20, damping: 15 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div className="max-w-[1300px] mx-auto flex justify-between text-gray-500 text-xl items-center px-12 h-20">
        <a href="#">F. Badaoui</a>

        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div
          className="md:hidden z-50 text-gray-200"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40"
        >
          <ul className="flex flex-col items-center justify-center h-screen gap-12 font-semibold text-4xl text-gray-200">
            <li className="cursor-pointer">
              <Link
                to="about"
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="portfolio"
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link
                to="contact"
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
