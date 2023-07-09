import { CartInitialState, CartActions, ActionsType } from "../types/types";

export const initialState: CartInitialState = {
  total: 0,
  products: []
}

export const cartReducer = (state: CartInitialState, actions: CartActions) => {
  const {type, payload} = actions;

  switch(type) {
    case ActionsType.Add: {
      const isInCart = state.products.find((prod) => prod.id === payload.id)
      if(isInCart){
        return {
          ...state
        }
      } else {
        console.log(ActionsType.Add)
        console.log(state)
        return {
          total: Number((state.total + Number(payload.price)).toFixed(2)),
          products: state.products.concat({...payload})
        }
      }
      break;
    }
    case ActionsType.Remove: {
      console.log(ActionsType.Remove)
      console.log(state)
      const isInCart = state.products.find((prod) => prod.id === payload.id)
      if(isInCart) {
        return {
          total: Number((state.total - Number(payload.price)).toFixed(2)),
          products: state.products.filter((prod) => prod.id !== payload.id)
        }
      } else {
        return {
          ...state
        }
      }
      break;
    }
    case ActionsType.Clear: {
      console.log(ActionsType.Clear)
      console.log(state)
      return {
        total: 0,
        products: []
      }
      break;
    }
    default:
      return {
        ...state
      }
  }

}
