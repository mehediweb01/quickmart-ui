const Hero = () => {
  return (
    <div
      className="bg-center bg-no-repeat bg-cover h-screen md:h-[90vh] backdrop-blur-md backdrop-brightness-100 -z-50 flex justify-center items-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="px-3 sm:px-6 py-6 bg-white w-full mx-4 sm:w-[60%] space-y-6 text-center">
        <h1 className="font-poppins font-medium text-3xl sm:text-[40px] leading-10 sm:leading-[57px] text-[#1D252C]">
          The Quick Mart
        </h1>
        <p className="text-[#1D252C] text-base sm:text-[18px] leading-[25px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          saepe eaque repudiandae in repellat?
        </p>
        <button
          type="button"
          className="bg-green-800 hover:bg-green-600 hover:text-black tracking-[1px] text-white px-4 py-2 cursor-pointer text-base sm:text-xl font-medium font-roboto rounded-md transition-all duration-300"
        >
          Discovery our collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
