"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Initial Load from LocalStorage
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const storedCount = JSON.parse(localStorage.getItem("cartCount") || "0");

    setCartItems(storedItems);
    setCount(storedCount);
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("cartCount", JSON.stringify(count));
  }, [cartItems, count]);

  // Your manual increment function (keep it untouched)
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  // ===> New: Add item to cart
const addToCart = (item) => {
  setCartItems((prevItems) => {
    const existingItemIndex = prevItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    // যদি ঐ item cart এ আগে থেকেই থাকে তবে কিছু করা হবে না
    if (existingItemIndex !== -1) {
      return prevItems;
    } else {
      return [...prevItems, { ...item, quantity: 1 }];
    }
  });
};


  // ===> New: Increase quantity
  const increaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // ===> New: Decrease quantity
  const decreaseQuantity = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0); // quantity 0 হলে remove করবো
      localStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  // ===> New: Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    setCount((prevCount) => prevCount - 1);
  };


  return (
    <CartContext.Provider
      value={{
        count,
        incrementCount,
        cartItems,
        setCartItems, // still available if you need manually
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
