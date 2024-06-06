import bgImage from "../../assets/BG2.jpg";

const SectionBanner = ({content=""}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <p className="mb-5">
            {content}
          </p>          
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
