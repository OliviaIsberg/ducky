import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Button } from '@mui/material'
import { Types } from '../contexts/Reducers'

function BuyButton({ dispatch, product }: any) {
  return (
    <>
      <Button
        onClick={() => {
          dispatch({
            type: Types.AddToCart,
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
