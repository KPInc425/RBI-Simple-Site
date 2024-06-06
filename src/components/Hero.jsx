
const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-[url(BG2.jpg)]"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg backdrop-blur-sm p-4 rounded-sm">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Thank you for stopping by today.  If you are looking for help building something new, modernizing something old, or increasing the success of something in-flight you have come to the right place.              
          </p>          
        </div>
      </div>
    </div>
  );
};

export default Hero;
