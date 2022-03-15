import React, { FC, useContext } from 'react'
import { useState } from 'react'
import { Product } from '../Api/Data'

export const CartContext = React.createContext<any>([]) //typings??

export const ProductsInCart: FC = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

// useCart hook
export const useCart = () => useContext(CartContext)
