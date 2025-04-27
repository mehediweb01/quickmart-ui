"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchCartCount();
  }, []);

  const fetchCartCount = async () => {
    try {
      const res = await fetch("/api/totalproductadded");
      const data = await res.json();
      if (data.length > 0) {
        setCount(data[0].count);
      }
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <CartContext.Provider value={{ count, incrementCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
