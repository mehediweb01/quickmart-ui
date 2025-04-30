"use client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiLock, CiUser } from "react-icons/ci";
import { FcAbout } from "react-icons/fc";
import { IoCallOutline, IoCartOutline, IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDropdownList, setIsOpenDropdownList] = useState(false);
  const { count } = useCart();

  return (
    <div className="flex justify-around items-center gap-4 p-2 shadow-md rounded-sm ">
      {/* mobile screen menu */}
      <div className="md:hidden flex">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <IoClose className="size-8 " />
          ) : (
            <IoMenu className="size-8" />
          )}
        </button>
      </div>
      {/* logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        <span className="text-cyan-400 text-xl sm:text-2xl font-bold font-roboto">
          Quick Mart
        </span>
      </Link>
      {/* link */}
      <div className="items-center gap-5 md:flex hidden">
        <Link
          href="/discovery"
          className="font-semibold text-black tracking-[1px] hover:text-cyan-400 hover:border-b hover:border-cyan-400 transition-all duration-300 font-roboto"
        >
          Discovery
        </Link>
        <Link
          href="/about"
          className="font-semibold text-black tracking-[1px] hover:text-cyan-400 hover:border-b hover:border-cyan-400 transition-all duration-300 font-roboto"
        >
          About
        </Link>
        <Link
          href="/contact-us"
          className="font-semibold text-black tracking-[1px] hover:text-cyan-400 hover:border-b hover:border-cyan-400 transition-all duration-300 font-roboto"
        >
          Contact us
        </Link>
      </div>
      {/* icons */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="cursor-pointer relative w-full"
          onClick={() => setIsOpenDropdownList(!isOpenDropdownList)}
        >
          <CiUser className="text-2xl" />
          {isOpenDropdownList && (
            <div
              className={`absolute right-0 bg-black/80 shadow-md rounded-md px-2 py-4 flex flex-col gap-2 w-[150px] z-50 transition-all duration-1000 top-10`}
            >
              <p className="font-poppins font-medium text-cyan-300 text-sm hover:text-cyan-500 transition-all duration-300 w-full flex items-center gap-1">
                <CiLock className="text-sky-500 size-4" /> Login / register
              </p>
              <p className="font-poppins font-medium text-cyan-300 text-sm hover:text-cyan-500 transition-all duration-300 w-full flex items-center gap-1 ">
                <FcAbout className="text-sky-500 size-4" /> About us
              </p>
              <p className="font-poppins font-medium text-cyan-300 text-sm hover:text-cyan-500 transition-all duration-300 w-full flex items-center gap-1">
                <IoCallOutline className="text-sky-500 size-4" /> Contact
              </p>
              <div
                onClick={() => setIsOpenDropdownList(false)}
                className=" absolute top-[-12px] right-[-12px]  text-white text-lg w-7 h-7 flex items-center justify-center rounded-full cursor-pointer border border-cyan-400 hover:scale-105 transition-all duration-300"
              >
                ❌
              </div>
            </div>
          )}
        </button>
        <Link href="/cart" className="relative">
          <IoCartOutline className="text-2xl" />
          <span className="absolute top-[-10px] right-[-10px] bg-cyan-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {count}
          </span>
        </Link>
      </div>

      {/* mobile screen menu */}
      {isOpen && (
        <div
          className={`absolute left-0 w-full bg-white flex flex-col items-start ps-4 pt-4 gap-4 py-4 shadow-md md:hidden z-20 transition-all duration-300 ${
            isOpen ? "top-14" : "top-[-100%]"
          }`}
        >
          <Link
            href="/discovery"
            className="font-semibold text-black tracking-[1px] hover:text-cyan-400 hover:border-b hover:border-cyan-400 transition-all duration-300 font-roboto"
          >
            Discovery
          </Link>
          <Link
            href="/about"
            className="font-semibold text-black tracking-[1px] hover:text-cyan-400 hover:border-b hover:border-cyan-400 transition-all duration-300 font-roboto"
          >
            About
          </Link>
          <Link
            href="/contact-us"
            className="font-semibold text-black tracking-[1px] hover:text-cyan-400 hover:border-b hover:border-cyan-400 transition-all duration-300 font-roboto"
          >
            Contact us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
