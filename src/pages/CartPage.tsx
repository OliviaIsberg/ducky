import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import { useEffect } from 'react'
import { useCart } from '../contexts/ProductsInCartContext'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import PaymentIcon from '@mui/icons-material/Payment'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { CartType, Types } from '../contexts/Reducers'
import useLocalStorage from '../Hooks/useLocalStorage'

function CartPage() {
  const {
    state: { cart },
    dispatch,
  } = useCart()
  const [total, setTotal] = useLocalStorage('cartSum', 0)

  let imgURL =
    'https://cdn.pixabay.com/photo/2017/10/05/22/34/rubber-duck-2821371_1280.jpg'

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc: number, current: CartType) => acc + current.price * current.qty,
        0
      )
    )
  }, [cart, setTotal])
  console.log(cart)

  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h2" gutterBottom>
        Din kundkorg
      </Typography>
      <Divider light />
      <List>
        {cart.length > 0 ? (
          cart.map((product: CartType) => (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <img
                  src={imgURL}
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
    </Container>
  )
}

export default CartPage
