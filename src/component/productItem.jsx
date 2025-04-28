"use client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";

const ProductItem = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  const total = item.quantity * item.price;

  return (
    <div className="shadow-sm shadow-black rounded-md px-4 py-3">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        {/* Image and Title */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="object-contain"
          />
          <div className="space-y-2 sm:space-y-4">
            <h1 className="font-poppins font-medium text-lg sm:text-2xl text-black">
              {item.title}
            </h1>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-green-400 underline hover:text-red-400 cursor-pointer transition-all duration-300 text-sm sm:text-base"
            >
              remove
            </button>
          </div>
        </div>

        {/* Price */}
        <div className="flex flex-col items-start sm:items-center">
          <p className="font-poppins font-medium text-base sm:text-xl text-black">
            ${item.price}
          </p>
        </div>

        {/* Quantity Controls */}
        <div className="border w-fit border-green-400 flex items-center gap-2 p-2 rounded-md">
          <button
            type="button"
            onClick={() => increaseQuantity(item.id)}
            className="hover:bg-slate-800 text-green-400 text-xl sm:text-2xl p-2 rounded-md text-center"
          >
            +
          </button>
          <p className="text-base sm:text-lg font-semibold">{item.quantity}</p>
          <button
            type="button"
            disabled={item.quantity <= 1}
            onClick={() => decreaseQuantity(item.id)}
            className="hover:bg-slate-800 hover:text-red-500 text-slate-600 text-xl sm:text-2xl p-2 rounded-md text-center disabled:cursor-not-allowed"
          >
            -
          </button>
        </div>

        {/* Total */}
        <div className="flex flex-col items-start sm:items-center">
          <p className="font-poppins font-medium text-base sm:text-xl text-black">
            ${total}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
