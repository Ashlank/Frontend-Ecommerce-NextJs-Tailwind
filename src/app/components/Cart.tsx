'use client'

import { useContext } from "react"
import { CartContext } from "../contexts/cart"
import { ContextType } from "../types/types"
import CartProduct from "./CartProduct"
import { Card, Typography, Button } from '../utils/material-tailwind-imports'
import CheckoutModal from "./CheckoutModal"

const TABLE_HEAD = ["Image", "Title", "Price", "Action"];

export default function Cart() {
  const { state, clearCart } = useContext(CartContext) as ContextType

  return (
    <div className="w-full h-screen mt-12 flex justify-center">
      <Card className="w-full h-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {
              state.products.length > 0
                ?
              state.products.map((product) => {
                return <CartProduct product={product} key={product.id}/>
              })
                :
              (
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">The cart is empty</td>
                </tr>
              )
            }
          </tbody>
          <tfoot>
            <tr className="even:bg-blue-gray-50/50">
              <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                    variant="h5"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Total
                  </Typography>
              </th>
              <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                {'$ ' + state.total}
              </td>
              <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Button color="orange" size="sm" onClick={() => clearCart()}>Clear Cart</Button>
              </td>
              <td className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <CheckoutModal total={state.total}/>
              </td>
            </tr>
          </tfoot>
        </table>
      </Card>

    </div>
  )
}
