import { AiFillGithub } from "react-icons/ai";

const Portfolio = () => {
  const projects = [
    {
      img: "https://via.placeholder.com/150",
      title: "Project #1",
      description: "This is a description of project 1",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Project #2",
      description: "This is a description of project 2",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Project #3",
      description: "This is a description of project 3",
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Project #4",
      description: "This is a description of project 4",
      links: {
        github: "#",
        live: "#",
      },
    },
  ];

  return (
    <div
      id="portfolio"
      className="mt-10 max-w-[1200px] mx-auto px-6 md:my-20 pt-10"
    >
      <div className="mt-15 pt-10">
        <h2 className="text-3xl font-bold text-gray-200 mb-8 uppercase text-center mt-10">
          Portfolio
        </h2>
        {projects.map((project, index) => (
          <div
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
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.links.live}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out"
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition-all duration-300 ease-in-out"
                >
                  <AiFillGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
