import GradientTitle from "./shared/GradientTitle";
import SectionBadge from "./shared/SectionBadge";
import servicesData from "../data/servicesData";

const Services = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mb-8 lg:mb-16">
        <div className="flex flex-col gap-4 justify-center items-center p-4 lg:p-12 max-w-[100vw]">
          <SectionBadge title="Services" />
          <GradientTitle title="We can build your dream product into a cross-platform juggernaut" />
        </div>
        {servicesData.map((service) => {
          return (
              <div className="p-4 lg:p-8 text-sm lg:text-lg max-w-[100vw]" key={service.title}>
                <div className="flex gap-2 items-center max-w-full">
                  <div className="h-14 w-14">
                    {service.logo}
                  </div>
                  <span className="font-bold lg:text-start col-span-8 text-balance lg:ml-4">{service.name}</span>
                </div>
                <p>{service.subTitle}</p>
                <p className="text-balance">{service.description}</p>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default Services;