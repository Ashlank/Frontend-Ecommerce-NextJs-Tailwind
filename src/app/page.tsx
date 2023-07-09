import Categories from "./components/Categories"
import ProductsList from "./components/ProductsList"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col py-8">
      <div className={`bg-categories w-fit py-1 px-2 rounded-sm`}>
        <h2 className=" font-bold text-[#454D4A]">Categories</h2>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      {/* @ts-expect-error Async Server Component */}
      <ProductsList />
    </main>
  )
}
