import { Product } from "../types/types";
import ProductItem from "./ProductItem";

const fetchProducts = async (): Promise<Product[]> => {
  return await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
}

export default async function ProductsList() {
  const products = await fetchProducts();

  return (
    <section className="flex flex-wrap justify-center gap-10 md:justify-around mt-14">
      {
        products.map((product: Product) => {
          return (
            <ProductItem key={product.id} product={product}/>
          )
        })
      }
    </section>
  )
}
