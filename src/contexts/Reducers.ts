export const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (c: { id: number }) => c.id !== action.payload.id
        ),
      }
    case 'CHANGE_PROD_QTY':
      return {
        ...state,
        cart: state.cart.filter((c: { id: number; qty: number }) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      }
    default:
      return state
  }
}
