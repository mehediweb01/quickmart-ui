import Image from "next/image";
import Link from "next/link";
import { productsData } from "../../public/data/db";

const Popular = () => {
  return (
    <div className="py-16 space-y-2">
      <h1 className="font-poppins font-medium text-3xl sm:text-[40px] leading-10 sm:leading-[57px] text-[#1D252C] text-center">
        Popular
      </h1>
      <p className="font-roboto font-medium text-black/60 text-base sm:text-xl text-center">
        Our top selling product that you may like
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-4 mt-12 ">
        {productsData.slice(1, 5).map((product) => (
          <Link
            href={`/products/${product.id}`}
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

export default Popular;
