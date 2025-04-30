"use client";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCartPlus, FaShippingFast } from "react-icons/fa";

const Product = () => {
  const [product, setProduct] = useState(null);
  const {
    incrementCount,
    addToCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleAddToCart = (product) => {
    incrementCount();
    addToCart(product);
  };

  if (!product)
    return (
      <div className="text-center text-2xl text-black/90 font-roboto">
        Loading...
      </div>
    );

  const isProductInCart = cartItems.some((item) => item.id === product.id);
  const productInCart = cartItems.find((item) => item.id === product.id);
  const quantity = productInCart ? productInCart.quantity : 1;

  const handleIncrease = () => {
    if (isProductInCart) {
      increaseQuantity(product.id);
    }
  };

  const handleDecrease = () => {
    if (isProductInCart && quantity > 1) {
      decreaseQuantity(product.id);
    }
  };

  return (
    <div className="sm:py-16 py-8 px-4 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:gap-8 gap-2">
        <div className="space-y-3">
          <div className="flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.title}
              height={200}
              width={200}
              className="rounded-md shadow-sm shadow-black"
            />
          </div>
          <p className="font-poppins text-sm sm:text-base text-black/80 font-medium">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            veniam error, cumque quibusdam ratione magnam aspernatur accusantium
            explicabo molestiae culpa quis autem quisquam repudiandae
            necessitatibus!
          </p>
          <Link
            href=""
            className="uppercase text-green-500 font-semibold font-roboto sm:text-xl text-base flex items-center gap-2 justify-center"
          >
            <FaShippingFast className="size-7 text-green-400" /> Free shipping
          </Link>
        </div>
        <div>
          <h1 className="font-poppins text-2xl sm:text-3xl font-semibold text-black">
            {product.title}
          </h1>
          <div className="flex sm:flex-row flex-col justify-between items-start gap-8">
            <div className="space-y-5">
              <p className="text-green-400 text-xl font-roboto font-semibold">
                ${product.price}
              </p>
              <div className="space-y-2">
                <p>Quantity</p>
                <div className="border-[1px] border-slate-300 rounded-md flex items-center">
                  <button
                    type="button"
                    onClick={handleIncrease}
                    className="px-1 py-1 hover:bg-slate-300 text-black transition-all duration-200 text-xl cursor-pointer"
                  >
                    +
                  </button>
                  <p className="font-bold font-roboto text-xl text-black px-3">
                    {quantity}
                  </p>
                  <button
                    type="button"
                    disabled={quantity <= 0}
                    onClick={handleDecrease}
                    className="px-1 py-1 hover:bg-slate-300 text-black transition-all duration-200 text-xl cursor-pointer disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="text-black/70 font-semibold font-roboto text-xl">
                  One time purchase
                </span>
              </div>
              <div className="border-[1px] border-slate-300 rounded-md px-1 lg:px-4 py-2 space-y-3 w-[90%] ">
                <div className="flex items-center gap-3">
                  <input type="checkbox" checked />
                  <span className="font-semibold font-roboto text-base lg:text-xl text-black lg:tracking-[1px] tracking-tight">
                    Subscribe and delivery every
                  </span>
                  <select
                    name=""
                    id=""
                    className="border border-slate-300 rounded-md"
                  >
                    <option value="2 weeks">2 weeks</option>
                    <option value="4 weeks">4 weeks</option>
                  </select>
                </div>
                <div>
                  <p className="text-sm text-black/60 font-poppins font-medium">
                    Subscribe now and get the 10% of discount on every recurring
                    order. The discount will be applied at checkout. See details
                  </p>
                </div>
              </div>
              <div>
                <p className="space-x-4 font-semibold font-roboto text-xl text-black my-4 border-b border-slate-500/30 rounded-lg pb-2">
                  <span>Total Price</span>{" "}
                  <span className="text-green-500 font-bold tracking-[1px] font-roboto">
                    ${quantity * product.price}
                  </span>
                </p>
                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  disabled={isProductInCart}
                  className="bg-green-600 hover:bg-green-400 text-xl text-white px-4 py-2 rounded-md w-[90%] cursor-pointer flex items-center justify-center gap-3 hover:text-gray-700 transition-all duration-300 disabled:cursor-not-allowed"
                >
                  <FaCartPlus />
                  {isProductInCart ? "Added to cart" : "+ Add to cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
