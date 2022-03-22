type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}
//Cart

export enum Types {
  AddToCart = 'ADD_TO_CART',
  DeleteFromCart = 'REMOVE_FROM_CART',
  UpdateQty = 'CHANGE_PROD_QTY',
}

export type CartType = {
  id: number
  title: string
  description: string
  price: number
  qty: number
  imgURL: string
}

type CartPayload = {
  [Types.AddToCart]: {
    id: number
    title: string
    description?: string
    price: number
    qty?: number
  }

  [Types.DeleteFromCart]: {
    id: number
  }
  [Types.UpdateQty]: {
    id: number
    qty: number
  }
}

export type CartActions = ActionMap<CartPayload>[keyof ActionMap<CartPayload>]

export const cartReducer = (state: CartType[] | any, action: CartActions) => {
  switch (action.type) {
    case Types.AddToCart:
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case Types.DeleteFromCart:
      return {
        ...state,
        cart: state.cart.filter(
          (c: { id: number }) => c.id !== action.payload.id
        ),
      }
    case Types.UpdateQty:
      return {
        ...state,
        cart: state.cart.filter((cartItem: CartType) =>
          cartItem.id === action.payload.id
            ? (cartItem.qty = action.payload.qty)
            : cartItem.qty
        ),
      }
    default:
      return state
  }
}

// Products
