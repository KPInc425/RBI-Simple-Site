import GradientTitle from "./shared/GradientTitle";
import SectionBadge from "./shared/SectionBadge";
import projectData from "../data/projectsData";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-4 p-4 xl:p-12">
        <div className="text-center">
          <GradientTitle title="Recent Work" />
        </div>
        <div className="grid lg:grid-cols-2 lg:text-start">
          {projectData.map((project, index) => {
            return (
                <div className={`p-4 lg:p-8 text-sm lg:text-lg text-center lg:text-start max-w-[100vw]`} key={project.name}>
                  <div className={`flex flex-col items-center lg:flex-row gap-2 max-w-full`}>
                    <div className="h-14 w-14">
                      {project.logo}
                    </div>
                    <span className="font-bold lg:text-start text-xl lg:text-3xl text-balance">{project.name}</span>
                  </div>
                  <p className="text-sm pb-4">{project.tagLine}</p>
                  <p className="text-balance pb-4">{project.description}</p>
                  <p className="italic text-xs">{project.tagLineDescription}</p>
                  
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