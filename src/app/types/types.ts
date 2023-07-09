export type Category = {
  products: string[]
  _id: string
  name: string
  slug: string
}

export type FetchCategories = {
  data: Category[]
  status: number
  message: string
}

export interface Product {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export type CartInitialState = {
  total: number,
  products: Product[]
}

export type CartActions = {
  type: string,
  payload: Product
}

export enum ActionsType {
  Add = 'ADD_TO_CART',
  Remove = 'REMOVE_FROM_CART',
  Clear = 'CLEAR_CART'
}

export type ContextType = {
  state: CartInitialState,
  addToCart: (product: Product) => void,
  removeFromCart: (product: Product) => void,
  clearCart: () => void
}