'use client'

import { createContext, ReactNode, useState } from "react";
import { ShoppingCartData } from "@/lib/data/shopping-cart/shoppingCartGetData";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

//TODO: increaseAmount, decreaseAmount, getItemsQuantity - all for localStorage
interface ShoppingCartContextState {
  data: ShoppingCartData[];
  addToCart: (productId: number, amount: number) => void;
  deleteFromCart: (productId: number) => void;
}

const initialState: ShoppingCartContextState = {
  data: [],
  addToCart: () => undefined,
  deleteFromCart: () => undefined,
}

export const ShoppingCartContext = createContext<ShoppingCartContextState>(initialState)

export function ShoppingCartContextProvider({ children }: ShoppingCartProviderProps) {
  const [data, setData] = useState<ShoppingCartData[]>([])

  const addToCart = (productId: number, amount: number) => {

  }

  const deleteFromCart = (productId: number) => {

  }

  const contextValue: ShoppingCartContextState = {
    data,
    addToCart,
    deleteFromCart
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}