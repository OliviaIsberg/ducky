import React, { useContext } from 'react'
import { useState } from 'react'

export const CartContext = React.createContext<any>([])

function ProductsInCart({ children }: React.PropsWithChildren<unknown>) {
  const [cart, setCart] = useState<any>([])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default ProductsInCart

export const useCart = () => useContext(CartContext)
