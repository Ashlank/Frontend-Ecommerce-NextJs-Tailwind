'use client'

import Image from "next/image"
import Link from "next/link"
import { ContextType, Product } from "../types/types"
import { useContext } from "react"
import { CartContext } from "../contexts/cart"
import { Button } from '../utils/material-tailwind-imports'

export default function ProductDetail({ product }: { product: Product}) {
  const {addToCart, removeFromCart } = useContext(CartContext) as ContextType;

  return (
    <>
      <div className='gap-4 flex flex-col justify-start max-w-[300px] sm:max-w-[400px]'>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          priority={true}
        />
        <Link href="/" className='text-blue-800'> ← Back to home</Link>
      </div>
      <div className='flex flex-col gap-6 bg-slate-200 p-6 max-w-[250px] md:max-w-[400px]'>
        <h3 className='text-xl font-bold'>{product.title}</h3>
        <p className=' opacity-75'>{product.description}</p>
        <div className='flex justify-between'>
          <span className='font-bold'>Price $ {product.price}</span>
          <span className='opacity-75'>☆	{product.rating.rate} | {product.rating.count} votes</span>
        </div>
        <div className='flex gap-6'>
          <Button
            onClick={() => addToCart(product)}
            ripple={false}
            fullWidth={true}
            className="shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            Add to Cart
          </Button>
          <Button
            size="sm"
            color="red"
            onClick={() => removeFromCart(product)}
            ripple={false}
            fullWidth={false}
            className="shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            Remove
          </Button>
        </div>

      </div>
    </>
  )
}
