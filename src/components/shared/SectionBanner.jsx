const SectionBanner = ({ title = "" }) => {
  return (
    <div className={"hero h-40 bg-[url(./BG2.jpg)] bg-top"}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <p className="text-xl xl:text-5xl font-bold text-balance">{title}</p>
      </div>
    </div>
  );
};

export default SectionBanner;
