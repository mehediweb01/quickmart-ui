"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Star from "../../public/svg/star";

const Testimonials = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="py-16 bg-green-200/30 ">
      <h1 className="font-poppins font-medium text-3xl sm:text-[40px] leading-10 sm:leading-[57px] text-[#1D252C] text-center">
        Testimonials
      </h1>
      <p className="text-[#1D252C] text-base sm:text-[18px] leading-[25px] text-center">
        Some quotes from our happy customers
      </p>
      <div className="w-full sm:w-[70%] sm:mx-auto mx-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 py-6 mt-8">
        {data.map((data) => (
          <div
            key={data.id}
            className="shadow-sm shadow-black px-4 py-6 rounded-md flex flex-col justify-center items-center gap-2 bg-white"
          >
            <Image src={data.image} alt={data.name} width={100} height={100} />
            <div className="flex items-center gap-0.5">
              {Array.from({ length: data.rating }, (_, index) => (
                <div key={index}>
                  <Star />
                </div>
              ))}
            </div>
            <h1 className="font-roboto sm:text-xl text-base font-medium text-[#1D252C] text-center">
              {data.title}
            </h1>
            <p className="font-poppins font-medium text-sm text-black/60">
              {data.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
