import { Product } from '@/app/types/types'
import ProductDetail from '@/app/components/ProductDetail'

type Params = {
  id: string
}

const fetchProduct = async (id: string): Promise<Product> => {
  return await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
}

export default async function Page({ params }: { params: Params}) {
  const product = await fetchProduct(params.id)

  return (
    <div className='flex w-full flex-col sm:flex-row items-center justify-evenly my-16'>
      <ProductDetail product={product} />
    </div>
  )
}
