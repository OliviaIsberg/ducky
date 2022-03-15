import {
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
import { Key, useEffect, useState } from 'react'
import { useCart } from '../contexts/ProductsInCartContext'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import PaymentIcon from '@mui/icons-material/Payment'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'

function CartPage() {
  const { cart, setCart } = useCart()
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc: number, curr: { price: any }) => acc + Number(curr.price),
        0
      )
    )
  }, [cart])
  console.log(cart)

  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h2" gutterBottom>
        Din kundkorg
      </Typography>
      <Divider light />
      <List>
        {cart.length !== 0 ? (
          cart.map(
            (product: {
              id: Key | null | undefined
              title: string
              price: number
            }) => (
              <ListItem key={product.id}>
                <ListItemIcon>
                  <IconButton
                    aria-label="delete"
                    onClick={() =>
                      setCart(
                        cart.filter(
                          (c: { id: Key | null | undefined }) =>
                            c.id !== product.id
                        )
                      )
                    }
                  >
                    <RemoveCircleIcon color="error" />
                  </IconButton>
                </ListItemIcon>
                <ListItemText>{product.title}</ListItemText>
                <ListItemText sx={{ textAlign: 'right' }}>
                  {product.price} kr
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
