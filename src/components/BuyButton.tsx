import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Button } from '@mui/material'

function BuyButton({ dispatch, product }: any) {
  return (
    <>
      <Button
        onClick={() => {
          dispatch({
            type: 'ADD_TO_CART',
            payload: product,
          })
        }}
        variant="contained"
        endIcon={<AddShoppingCartIcon />}
      >
        Köp nu {product.price}kr
      </Button>
    </>
  )
}

export default BuyButton
