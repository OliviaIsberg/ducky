import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ButtonGroup,
  Button,
  ListItemIcon,
  Tooltip,
  IconButton,
  Typography,
  Divider,
  Box,
} from '@mui/material'
import PaymentIcon from '@mui/icons-material/Payment'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { CartType, Types } from '../contexts/Reducers'

function CartList() {
  const { cart, dispatch, total } = useCart()

  return (
    <>
      <List>
        {cart && cart.length > 0 ? (
          cart.map((product: CartType) => (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <img
                  src={product.imgURL}
                  alt={product.title}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={`${product.price} kr/st`}
                sx={{ marginLeft: '.5rem' }}
              />
              <ButtonGroup
                size="small"
                sx={{ flexGrow: '1', justifyContent: 'flex-end' }}
              >
                <Button
                  onClick={() => {
                    dispatch({
                      type: Types.UpdateQty,
                      payload: {
                        id: product.id,
                        qty: (product.qty = product.qty - 1),
                      },
                    })
                  }}
                >
                  <RemoveIcon />
                </Button>
                <Button disableRipple>{product.qty}</Button>
                <Button
                  onClick={() => {
                    dispatch({
                      type: Types.UpdateQty,
                      payload: {
                        id: product.id,
                        qty: (product.qty += 1),
                      },
                    })
                  }}
                >
                  <AddIcon />
                </Button>
              </ButtonGroup>

              <ListItemText sx={{ textAlign: 'right' }}>
                {product.price * product.qty} kr
              </ListItemText>
              <ListItemIcon>
                <Tooltip title="Ta bort">
                  <IconButton
                    aria-label="delete"
                    edge="end"
                    onClick={() => {
                      dispatch({
                        type: Types.DeleteFromCart,
                        payload: product,
                      })
                    }}
                  >
                    <RemoveCircleIcon color="error" />
                  </IconButton>
                </Tooltip>
              </ListItemIcon>
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">Här var det tomt!</Typography>
        )}
      </List>
      <Divider light textAlign="right">
        Summa
      </Divider>
      <Box maxWidth="md" sx={{ paddingInline: '1rem', textAlign: 'right' }}>
        <Typography variant="h6" textAlign="right" sx={{ mb: 10 }}>
          {total} kr
        </Typography>
        <Link to="/products">
          <Button variant="contained" sx={{ mr: 2 }}>
            Fortsätt handla
          </Button>
        </Link>
        <Link to={cart.length ? '/checkoutPage' : ''}>
          <Button
            variant="outlined"
            endIcon={<PaymentIcon />}
            disabled={cart.length > 0 ? false : true}
          >
            Till betalning
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default CartList
