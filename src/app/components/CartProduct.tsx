'use client'

import { Product } from '../types/types'
import { Button, Typography, Avatar } from '../utils/material-tailwind-imports'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart'
import { ContextType } from '../types/types'


export default function CartProduct({ product }: { product: Product}) {
  const { removeFromCart } = useContext(CartContext) as ContextType

  return (
    <tr className="even:bg-blue-gray-50/50">
      <td className="p-4">
        <Avatar src={product.image} alt="product image" variant="square" />
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {product.title}
        </Typography>
      </td>
      <td className="p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          {'$ ' + product.price}
        </Typography>
      </td>
      <td className="p-4">
        <Button color='red' size='sm' onClick={() => removeFromCart(product)}>Remover</Button>
      </td>
    </tr>
  )
}
