import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useCart } from '../contexts/ProductsInCartContext'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import PaymentIcon from '@mui/icons-material/Payment'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

function CartPage() {
  const {
    state: { cart },
    dispatch,
  } = useCart()
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc: number, current: { price: number; qty: number }) =>
          acc + Number(current.price) * current.qty,
        0
      )
    )
  }, [cart])

  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h2" gutterBottom>
        Din kundkorg
      </Typography>
      <Divider light />
      <List>
        {cart.length > 0 ? (
          cart.map(
            (product: {
              id: number | null | undefined
              title: string
              price: number
              qty: number
            }) => (
              <ListItem key={product.id}>
                <ListItemIcon>
                  <Tooltip title="Ta bort">
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: product,
                        })
                      }}
                    >
                      <RemoveCircleIcon color="error" />
                    </IconButton>
                  </Tooltip>
                </ListItemIcon>
                <ListItemText>{product.title}</ListItemText>
                <ButtonGroup>
                  <Button
                    onClick={() => {
                      dispatch({
                        type: 'CHANGE_PROD_QTY',
                        payload: {
                          id: product.id,
                          qty: (product.qty = product.qty - 1),
                        },
                      })
                    }}
                  >
                    <RemoveIcon />
                  </Button>
                  <Button>{product.qty}</Button>
                  <Button
                    onClick={() => {
                      dispatch({
                        type: 'CHANGE_PROD_QTY',
                        payload: {
                          id: product.id,
                          qty: (product.qty = product.qty + 1),
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
              </ListItem>
            )
          )
        ) : (
          <Typography variant="body1">Här var det tomt!</Typography>
        )}
      </List>
      <Divider light textAlign="right">
        Summa
      </Divider>
      <Box maxWidth="md" sx={{ paddingInline: '1rem', textAlign: 'right' }}>
        <Typography variant="h6" textAlign="right">
          {total} kr
        </Typography>
        <Link to="/checkoutPage">
          <Button variant="outlined" endIcon={<PaymentIcon />}>
            Till betalning
          </Button>
        </Link>
      </Box>
    </Container>
  )
}

export default CartPage
