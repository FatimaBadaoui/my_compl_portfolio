import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const contactsInfo = [
    {
      icon: <AiFillPhone />,
      url: "#",
      text: "+49 1795681264",
    },
    {
      icon: <AiFillMail />,
      url: "#",
      text: "f.badaoui1993@gmail.com",
    },
    {
      icon: <AiFillLinkedin />,
      url: "https://www.linkedin.com/in/fatima-badaoui",
      text: "linkedin.com/in/",
    },
    {
      icon: <AiFillGithub />,
      url: "https://github.com/FatimaBadaoui",
      text: "github.com/fbadaoui",
    },
  ];

  return (
    <div id="contact" className="py-10 max-w-[1000px] mx-auto md:my-12">
      <div className="pt-[100px]">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-gray-200 text-center mb-12 uppercase"
        >
          get in touch
        </motion.h1>
        <div>
          {contactsInfo.map((contact, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="my-4 max-w-[350px] mx-auto pl-10"
            >
              <a
                href={contact.url}
                target="_blank"
                className="flex items-center hover:scale-105 transition-transform duration-300"
              >
                <p className="bg-primary-200 text-primary-600 p-2 rounded-lg text-xl mr-5">
                  {contact.icon}
                </p>
                <p className="text-gray-300 text-[16px]">{contact.text}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
