import React from 'react'
import Image from "next/image";

import { Category, FetchCategories } from "../types/types";

const getCategories = async (): Promise<FetchCategories> => {
  return await fetch('https://api.storerestapi.com/categories')
    .then(response => response.json())
}

export default async function Categories() {
  const { data } = await getCategories();

  return (
    <section className="flex gap-2 text-sm w-full md:justify-between py-6 flex-wrap justify-center">
      {data.map((category: Category) => {
        return (
          <article key={category._id} className="border-[1px] border-[#000000] px-4 py-2 rounded-md min-w-[300px] sm:min-w-fit capitalize relative my-2">
            {category.name}
            <Image
              src={`/${category.slug}.png`}
              alt={`${category.slug}`}
              width={60}
              height={55}
              className="absolute left-[90%] top-[-10%]"
            />
          </article>
        )
      })}
    </section>
  )
}
