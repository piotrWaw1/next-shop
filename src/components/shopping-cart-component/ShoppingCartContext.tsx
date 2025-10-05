'use client'

import { createContext, ReactNode, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

//TODO: addToCart, increaseAmount, decreaseAmount, deleteFromCart, getItemsQuantity - all for localStorage
interface ShoppingCartContextState {
  data: string;
}

const initialState: ShoppingCartContextState = {
  data: ""
}

const ShoppingCartContext = createContext<ShoppingCartContextState>(initialState)

export function ShoppingCartContextProvider({ children }: ShoppingCartProviderProps) {
  const [data, setData] = useState("")

  const contextValue: ShoppingCartContextState = {
    data
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  )
}