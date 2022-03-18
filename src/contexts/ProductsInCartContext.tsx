import React, { FC, useContext, useReducer } from 'react'
import { mockedProducts } from '../Api/Data'
import { cartReducer } from './Reducers'

export const CartContext = React.createContext<any>(null) //typings??

export const ProductsInCart: FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: mockedProducts,
    cart: [],
  })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
export default ProductsInCart
// useCart hook
export const useCart = () => useContext(CartContext)
