import {
  DiHtml5,
  DiCss3,
  DiSass,
  DiJavascript1,
  DiBootstrap,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGit,
  DiGithub,
  DiLinux,
  DiNpm,
  DiTrello,
  DiVisualstudio,
} from "react-icons/di";

const About = () => {
  const skills = [
    {
      icon: <DiHtml5 className="text-orange-600" />,
      name: "HTML5",
    },
    {
      icon: <DiCss3 className="text-blue-600" />,
      name: "CSS3",
    },
    {
      icon: <DiSass className="text-pink-600" />,
      name: "Sass",
    },
    {
      icon: <DiJavascript1 className="text-yellow-500" />,
      name: "JavaScript",
    },
    {
      icon: <DiBootstrap className="text-purple-600" />,
      name: "Bootstrap",
    },
    {
      icon: <DiReact className="text-blue-500" />,
      name: "React",
    },
    {
      icon: <DiNodejsSmall className="text-green-500" />,
      name: "Node.js",
    },
    {
      icon: <DiMongodb className="text-green-600" />,
      name: "MongoDB",
    },
    {
      icon: <DiGit className="text-gray-800" />,
      name: "Git",
    },
    {
      icon: <DiGithub className="text-gray-800" />,
      name: "GitHub",
    },
    {
      icon: <DiLinux className="text-blue-800" />,
      name: "Linux",
    },
    {
      icon: <DiNpm className="text-red-600" />,
      name: "NPM",
    },
    {
      icon: <DiTrello className="text-blue-500" />,
      name: "Trello",
    },
    {
      icon: <DiVisualstudio className="text-blue-500" />,
      name: "VS Code",
    },
  ];

  return (
    <div className="px-4 text-gray-200 pb-8 md:py-12" id="about">
      <h2 className="text-3xl font-bold mb-4 text-center">About</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center ">
        <p className="text-center mb-8">
          I am a full-stack web developer with a passion for creating web
          applications. I have experience with the following technologies:
        </p>

        <div className="border border-purple-900 p-6 rounded-lg bg-purple-900 w-full">
          {skills.map((skill, index) => (
            <div key={index} className="">
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
