import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { mockedProducts } from '../Api/Data'
import useLocalStorage from '../Hooks/useLocalStorage'
import { cartReducer, CartActions, CartType, Store } from './Reducers'

export type ProductType = {
  id: number
  title: string
  information: string
  price: number
  imgURL: string
}
//testar testar  /sabina
export type InitialStateType = {
  products: ProductType[]
  cart: CartType[]
}

export const initialState = {
  products: mockedProducts,
  cart: [] as CartType[],
}

type Context = {
  state: Store
  dispatch: React.Dispatch<CartActions>
}

export const CartContext = createContext<Context>({} as Context)

export const ProductsInCart: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<Store, CartActions>>(
    cartReducer,
    initialState
  )

  console.log(state)

  useLocalStorage('stateLS', '')

  useEffect(() => {
    localStorage.setItem('stateLS', JSON.stringify(state))
  }, [state])

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export default ProductsInCart
// useCart hook
export const useCart = () => useContext(CartContext)
