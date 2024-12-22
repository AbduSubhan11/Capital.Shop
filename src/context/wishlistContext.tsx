"use client"
import React, { createContext, useContext, useState } from "react";

const WishContext = createContext<any>(null);

export function WishProvider({ children }: { children:any }) {
  const [wishItems, setWishItems] = useState<any[]>([]);

  const removeFromWish = (itemId: number) => {
    setWishItems((prevItems) => prevItems.filter(item => item.id !== itemId));
  };
  const addToWish = (item: {}) => {
    setWishItems((prevItems) => [...prevItems, item]);
  };
  

  return (
    <WishContext.Provider value={{ wishItems, addToWish , removeFromWish}}>
      {children}
    </WishContext.Provider>
  );
}

export const useWish = () => useContext(WishContext);