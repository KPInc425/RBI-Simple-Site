import GradientTitle from "./shared/GradientTitle";
import SectionBadge from "./shared/SectionBadge";
import projectData from "../data/projectsData";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-8 lg:mb-16">
        <div className="flex flex-col gap-4 justify-center items-center p-4 lg:p-12 max-w-[100vw]">
          <SectionBadge title="Projects" />
          <GradientTitle title="We have built some of our ideas, let us build some of yours" />
        </div>
        {projectData.map((project) => {
          return (
              <div className="p-4 lg:p-8 text-sm lg:text-lg max-w-[100vw]" key={project.name}>
                <div className="flex gap-2 items-center max-w-full">
                  <div className="h-14 w-14">
                    {project.logo}
                  </div>
                  <span className="font-bold lg:text-start col-span-7 text-balance lg:ml-4">{project.name}</span>
                </div>
                <p>{project.tagLine}</p>
                <p>{project.tagLineDescription}</p>
                <p className="text-balance">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="text-balance">{project.link}</a>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default Projects;