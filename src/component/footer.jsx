"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/footer")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="bg-black/90 px-4 py-8 ">
      <div className="flex md:flex-row flex-col justify-around items-center gap-4  border-t border-slate-100 rounded-md">
        <div className="space-y-2 pt-16">
          <Link href="/" className="flex items-center">
            <Image src="/images/logo.png" alt="logo" width={60} height={60} />
            <span className="text-white text-xl sm:text-2xl font-bold font-roboto">
              Quick Mart
            </span>
          </Link>
          <p className="text-white/90 text-sm sm:text-base font-roboto font-thin w-full sm:max-w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
            id!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-16">
          {data.map((data) => (
            <div key={data.id}>
              <h1 className="text-green-500 font-semibold tracking-[2px] text-base sm:text-xl font-roboto">
                {data.title}
              </h1>
              <div className="flex flex-col justify-center gap-3 mt-8 ">
                {data.link.map((data, i) => (
                  <span
                    key={i}
                    className="text-white font-roboto hover:border-b hover:border-slate-200 transition-all duration-300 hover:text-green-400 cursor-pointer"
                  >
                    {data}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
