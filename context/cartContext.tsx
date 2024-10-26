"use client"
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children:any }) {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const removeFromCart = (itemId: number) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };
  const addToCart = (item: {}) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart , removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);