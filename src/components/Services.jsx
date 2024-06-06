import GradientTitle from "./shared/GradientTitle";
import SectionBadge from "./shared/SectionBadge";
import servicesData from "../data/servicesData";

const Services = () => {
  return (
    <>
      <div className="flex flex-col gap-4 p-4 xl:p-12 text-center container mx-auto">
      <GradientTitle title="Core Services" />
        {servicesData.map((service) => {
          return (
              <div className="p-4 lg:p-8 text-sm lg:text-lg max-w-[100vw]" key={service.title}>
                <div className="flex flex-col lg:flex-row gap-2 justify-center items-center max-w-full">
                  <div className="h-14 w-14">
                    {service.logo}
                  </div>
                  <span className="font-bold lg:text-start text-3xl text-balance">{service.name}</span>
                  <div className="h-14 w-14 hidden lg:block">
                    {service.logo}
                  </div>
                </div>
                <p className="text-xl font-semibold py-4">{service.subTitle}</p>
                <p className="text-balance">{service.description}</p>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default Services;