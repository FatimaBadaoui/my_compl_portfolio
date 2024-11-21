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
      icon: <AiFillMail />,
      url: "#",
      text: "+49 1795681264",
    },
    {
      icon: <AiFillPhone />,
      url: "#",
      text: "f.badaoui1993@gmail.com",
    },
    {
      icon: <AiFillLinkedin />,
      url: "#",
      text: "linkedin.com/in/",
    },
    {
      icon: <AiFillGithub />,
      url: "#",
      text: "github.com/fbadaoui",
    },
  ];

  return (
    <div id="contact" className="py-6 max-w-[1000px] mx-auto md:my-12">
      <div className="pt-[100px]">
        <h1 className="text-4xl font-bold text-center md:text-4xl uppercase text-gray-200 mb-10">
          Contact
        </h1>
        <div>
          {contactsInfo.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="my-4 max-w-[350px] mx-auto pl-10"
            >
              <a
                href={contact.url}
                className="flex items-center hover:scale-105 transition-transform duration-300"
              >
                <p className="bg-gray-200 p-2 rounded-lg text-xl mr-5">
                  {contact.icon}
                </p>
                <p className="text-gray-400 text-[16px]">{contact.text}</p>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
