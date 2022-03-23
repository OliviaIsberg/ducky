import React, { createContext, useContext, useReducer, useEffect } from 'react'
// import { mockedProducts } from '../Api/Data'
// import useLocalStorage from '../Hooks/useLocalStorage'
import { cartReducer, CartActions, CartType } from './Reducers'

export type ProductType = {
  id: number
  title: string
  information: string
  price: number
  imgURL: string
}

type Context = {
  cart: CartType[]
  dispatch: React.Dispatch<CartActions>
}

export const CartContext = createContext<Context>({} as Context)

export const CartProvider: React.FC = ({ children }) => {
  const [cart, dispatch] = useReducer<React.Reducer<CartType[], CartActions>>(
    cartReducer,
    []
  )

  console.log(cart)

  // useLocalStorage('stateLS', '')

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export default CartProvider
// useCart hook
export const useCart = () => useContext(CartContext)
