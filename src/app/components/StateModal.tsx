'use client'

import { useContext } from "react"
import { CartContext } from "../contexts/cart"
import { ContextType } from "../types/types";

export default function StateModal() {
  const {state} = useContext(CartContext) as ContextType;

  return (
    <div className='absolute bottom-0 w-[450px] h-[100px] bg-slate-500'>
      <span className="text-xl text-black font-bold">
        {
          JSON.stringify(state, null, 2)
        }
      </span>
    </div>
  )
}
