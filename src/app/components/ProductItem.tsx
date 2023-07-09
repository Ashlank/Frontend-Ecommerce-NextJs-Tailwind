import Image from "next/image"
import { Product } from "../types/types"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '../utils/material-tailwind-imports';


export default function ProductItem({ product }: { product: Product }) {
  return (
    <Link href={`product/${product.id}`}>
      <Card className="w-80">
        <CardHeader shadow={false} floated={false} className="h-80">
          <Image
            width={300}
            height={300}
            src={product.image}
            className="w-full h-full object-cover"
            alt={product.title}
          />
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
            <Typography color='black' className="font-medium">
              {'$' + product.price}
            </Typography>
          </div>
        </CardBody>
      </Card>
    </Link>
  )
}
