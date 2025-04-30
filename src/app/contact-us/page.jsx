const ContactUs = () => {
  return (
    <div className="min-h-screen py-6 sm:py-12 px-4 ">
      <div className="text-center space-y-1">
        <h1 className="font-poppins font-medium text-3xl sm:text-[40px] leading-10 sm:leading-[57px] text-[#1D252C]">
          Contact us
        </h1>
        <p className="text-black/40 text-base sm:text-[18px] leading-[25px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          velit quia placeat.
        </p>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-start md:items-center gap-8 sm:gap-16 py-8 sm:py-16 w-full sm:w-[80%] lg:w-[70%]  mx-auto shadow-sm shadow-black px-4 mt-4 rounded-md">
        <div className="space-y-4">
          <h4 className="font-poppins font-medium text-base md:text-xl lg:text-3xl leading-10 sm:leading-[57px] text-[#1D252C]">
            Dhaka
          </h4>
          <p className="font-poppins font-medium text-base md:text-xl lg:text-3xl leading-10 sm:leading-[57px] text-[#1D252C]">
            example@gmail.com
          </p>
          <p className="font-poppins font-medium text-base md:text-xl lg:text-3xl leading-10 sm:leading-[57px] text-[#1D252C]">
            +8801754565***
          </p>
        </div>
        <div className="w-full">
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="name..."
              className="w-full sm:w-[80%] border border-sky-400 rounded-md px-4 py-2 shadow-sm shadow-sky-400 focus:shadow-inner focus:outline-none "
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full sm:w-[80%] border border-sky-400 rounded-md px-4 py-2 shadow-sm shadow-sky-400 focus:shadow-inner focus:outline-none"
            />
            <textarea
              cols={6}
              rows={6}
              placeholder="message..."
              className="w-full sm:w-[80%] border border-sky-400 rounded-md px-4 py-2 shadow-sm shadow-sky-400 focus:shadow-inner focus:outline-none"
            />
            <input
              type="button"
              value="Send"
              className="px-4 py-2 mt-4 rounded-md w-full sm:w-[80%] cursor-pointer bg-sky-500 text-white  text-base sm:text-xl md:text-2xl font-poppins font-medium hover:font-roboto hover:bg-sky-400 hover:text-black transition-all duration-300"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
