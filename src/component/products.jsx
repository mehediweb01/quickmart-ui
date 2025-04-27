import Image from "next/image";
import Link from "next/link";
import { productsData } from "../../public/data/db";

const Products = () => {
  return (
    <div className="py-16">
      <h1 className="font-poppins font-medium text-3xl sm:text-[40px] leading-10 sm:leading-[57px] text-[#1D252C] text-center">
        Products
      </h1>
      <p className="text-[#1D252C] text-base sm:text-[18px] leading-[25px] text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
      </p>
      <div className="w-full sm:w-[70%] mx-2 sm:mx-auto my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
        {productsData.map((product) => (
          <Link
            href="/"
            key={product.id}
            className="shadow-sm shadow-black px-4 py-2 rounded-md flex flex-col justify-center items-center gap-3 hover:shadow-md hover:shadow-black transition-all duration-300"
          >
            <Image
              src={product.image}
              alt={product.title}
              width={90}
              height={90}
              className="rounded-md shadow-sm shadow-black object-cover"
            />
            <h1 className="font-poppins font-medium text-2xl">
              {product.title}
            </h1>
            <p className="text-green-600 text-xl flex justify-end items-end h-full w-full font-poppins">
              ${product.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
