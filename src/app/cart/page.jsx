"use client";
import ProductItem from "@/component/productItem";
import { useCart } from "@/context/cartContext";
import Link from "next/link";

const Cart = () => {
  const { cartItems } = useCart();
  const heading = ["product", "price", "quantity", "total"];
  const totalSub = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="min-h-screen py-16 sm:py-14 mx-8">
      <div className="text-center space-y-2">
        <h1 className="font-poppins font-medium text-2xl sm:text-3xl text-black">
          Your Cart Items
        </h1>
        <Link
          href={`/`}
          className="underline text-green-400 text-xl font-poppins font-medium"
        >
          back to shopping
        </Link>
      </div>
      <div>
        <div>
          {cartItems.length > 0 ? (
            <>
              <div className="sm:flex hidden justify-between items-center gap-4 mt-8 ">
                {heading.map((heading, i) => (
                  <h1
                    key={i}
                    className="font-poppins font-medium text-black text-xl"
                  >
                    {heading}
                  </h1>
                ))}
              </div>
              <div className="space-y-3 my-8">
                {cartItems &&
                  cartItems.map((item) => (
                    <ProductItem key={item.id} item={item} />
                  ))}
              </div>
            </>
          ) : (
            <div>
              <h1 className="font-poppins font-medium text-red-400 text-xl sm:text-2xl md:text-3xl">
                Your cart is empty
              </h1>
            </div>
          )}
        </div>
        <div className="w-full py-16">
          <div className="flex sm:flex-row flex-col gap-4 items-start float-start sm:float-end">
            <div>
              <h1 className="space-x-8 space-y-3 text-black font-semibold font-poppins text-xl tracking-[1px]">
                <span>Sub total</span> <span>${totalSub}</span>
              </h1>
              <p className="text-black/60 font-roboto font-medium text-sm mt-3">
                Tax and shipping calculated at checkout
              </p>
            </div>
            <button
              type="button"
              disabled
              className="text-center text-base sm:text-xl font-semibold font-roboto bg-green-400 hover:bg-green-600 text-white px-6 py-2 rounded-md cursor-pointer transition-all duration-300 tracking-[2px] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
