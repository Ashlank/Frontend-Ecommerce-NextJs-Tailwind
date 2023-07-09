'use client'

import { createContext, useReducer } from "react";
import { initialState, cartReducer } from "../reducers/cartReducer";
import { ActionsType, Product, ContextType, CartInitialState } from "../types/types";

export const CartContext = createContext<ContextType | CartInitialState>(initialState);

export function CartProvider ({ children }: {children: React.ReactNode}) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product: Product) => dispatch({
    type: ActionsType.Add,
    payload: product
  })

  const removeFromCart = (product: Product) => dispatch({
    type: ActionsType.Remove,
    payload: product
  })

  const clearCart = () => dispatch({
    type: ActionsType.Clear,
    payload: 0 as any             // ||||||||||||||||---||||||||||||||||||
  })

  return (
    <CartContext.Provider value={{
      state,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}