import React, {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  useEffect,
} from 'react'
import { mockedProducts } from '../Api/Data'
import useLocalStorage from '../Hooks/useLocalStorage'
import { cartReducer, CartActions, CartType } from './Reducers'

export type ProductType = {
  id: number
  title: string
  information: string
  price: number
  imgURL: string
}

type InitialStateType = {
  products: ProductType[]
  cart: CartType[] | any
}

const initialState = {
  products: mockedProducts,
  cart: [],
}

export const CartContext = createContext<{
  state: InitialStateType
  dispatch: Dispatch<CartActions>
}>({
  state: initialState,
  dispatch: () => null,
})

// const mainReducer = (
//   { products, cart }: InitialStateType,
//   action: CartActions
// ) => ({
//   products: cartReducer(cart, action),
//   cart: cartReducer(cart, action),
// })

export const ProductsInCart: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
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
