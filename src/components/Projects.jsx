import GradientTitle from "./shared/GradientTitle";
import SectionBadge from "./shared/SectionBadge";
import projectData from "../data/projectsData";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 mb-8 lg:mb-16">
        <div className="flex flex-col gap-4 text-center justify-center items-center p-4 lg:p-12 max-w-[100vw]">
          <SectionBadge title="Projects" />
          <GradientTitle title="We have built some of our ideas, let us build some of yours" />
        </div>
        <div className="grid lg:grid-cols-2 text-center lg:text-start">
          {projectData.map((project, index) => {
            return (
                <div className={`p-4 lg:p-8 text-sm lg:text-lg max-w-[100vw] ${index == 8 && "lg:col-span-2 lg:text-center"}`} key={project.name}>
                  <div className={`flex flex-col lg:flex-row gap-2 items-center max-w-full ${index == 8 && "lg:justify-center"}`}>
                    <div className="h-14 w-14">
                      {project.logo}
                    </div>
                    <span className="font-bold lg:text-start text-xl lg:text-3xl text-balance">{project.name}</span>
                  </div>
                  <p className="text-lg">{project.tagLine}</p>
                  <p className="italic pb-4">{project.tagLineDescription}</p>
                  <p className="text-balance">{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-balance">{project.link}</a>
                </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;