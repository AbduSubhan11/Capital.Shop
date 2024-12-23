"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface WishItem {
  id: number;
  name: string;
  category: string;
  price: number;
  brand: string;
  stock: number;
  description: string;
  rating: number;
  images: string;
}

interface WishContextType {
  wishItems: WishItem[];
  addToWish: (item: WishItem) => void;
  removeFromWish: (itemId: number) => void;
}

const WishContext = createContext<WishContextType | null>(null);

export function WishProvider({ children }: { children: ReactNode }) {
  const [wishItems, setWishItems] = useState<WishItem[]>([]);

  const removeFromWish = (itemId: number) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const addToWish = (item: WishItem) => {
    setWishItems((prevItems) => [...prevItems, item]);
  };

  return (
    <WishContext.Provider value={{ wishItems, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
}

export const useWish = () => {
  const context = useContext(WishContext);
  if (!context) {
    throw new Error("useWish must be used within a WishProvider");
  }
  return context;
};
