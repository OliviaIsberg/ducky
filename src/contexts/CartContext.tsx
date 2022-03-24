import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { cartReducer, CartActions, CartType, initialState } from './Reducers'

type Context = {
  cart: CartType[]
  dispatch: React.Dispatch<CartActions>
}

function init(initialState: any) {
  initialState = localStorage.getItem('cart')
  return initialState ? JSON.parse(initialState) : ([] as unknown)
}

export const CartContext = createContext<Context>({} as Context)

export const CartProvider: React.FC = ({ children }) => {
  const [cart, dispatch] = useReducer<React.Reducer<CartType[], CartActions>>(
    cartReducer,
    initialState,
    init as any
  )

  console.log(cart)

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
