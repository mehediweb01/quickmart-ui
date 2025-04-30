import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen px-4 py-4 sm:py-6 bg-gradient-to-tl from-[#102B3D]/85 to-cyan-800/60">
      <Image
        src="/images/about.png"
        height={100}
        width={100}
        alt="About Image"
        className="mx-auto object-cover"
      />
      <h1 className="font-poppins font-medium text-3xl sm:text-[40px] leading-10 sm:leading-[57px] text-white text-center">
        About
      </h1>
      <h2 className="font-poppins font-medium text-base sm:text-xl md:text-2xl lg:text-3xl leading-10 sm:leading-[57px] text-white/90 text-center">
        Quick Mart UI
      </h2>
      <div className="w-full">
        <p className="sm:w-[60%] w-full mx-auto text-center font-roboto font-medium text-slate-200 text-xl mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          dignissimos voluptatum aliquid voluptates quos optio? Repellendus
          expedita excepturi voluptatibus nisi. Architecto ratione quasi rem
          debitis odio, doloribus reiciendis omnis reprehenderit voluptatem
          quibusdam! Doloremque, pariatur odio.
        </p>
      </div>
    </div>
  );
};

export default About;
