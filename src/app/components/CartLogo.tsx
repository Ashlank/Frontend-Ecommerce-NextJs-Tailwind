'use client'

import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "../contexts/cart"
import { ContextType } from "../types/types"
import IconWrapper from "./IconWrapper"

import cart from '../../../public/cart.svg'
import Link from "next/link"


export default function CartLogo() {
  const {state} = useContext(CartContext) as ContextType

  return (
    <Link href='/cart'>
      <IconWrapper>
        <Image
          src={cart}
          alt='cart'
        />
        <span className="absolute bottom-[75%] left-[75%] text-red-600 font-bold bg-gray-400 rounded-full w-5 h-5 text-center text-xl flex items-center justify-center">{state.products.length}</span>
      </IconWrapper>
    </Link>
  )
}
