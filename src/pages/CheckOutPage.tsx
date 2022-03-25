import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import OrderForm from '../components/Forms/OrderForm'
import useLocalStorage from '../Hooks/useLocalStorage'
import { CartType } from '../contexts/Reducers'
import { useState } from 'react'
import { deliveryOptions } from '../Api/Data'

function CheckOutPage() {
  // get cart and total price from cart
  const [cart] = useLocalStorage<CartType[]>('cart', '')
  const [total] = useLocalStorage<number>('cartSum', 0)
  const [shippingMethod, setShippingMethod] = useState<number | undefined>(
    undefined
  )

  return (
    <Container maxWidth="md">
      <h2>Kassa</h2>
      {/* cart summary, loops throught cart array */}
      <h3>Din kundkorg:</h3>
      <List dense>
        {cart?.length &&
          cart.map((c: CartType) => (
            <ListItem key={c.id}>
              <ListItemAvatar>
                <img
                  src={c.imgURL}
                  alt={c.title}
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                  }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={c.title}
                secondary={`Antal: ${c.qty} Pris: ${c.price} kr/st`}
              />
              <ListItemText
                primary={`${c.qty * c.price} kr`}
                sx={{ textAlign: 'right' }}
              />
            </ListItem>
          ))}
      </List>
      <Divider />
      {/* get and print total price of products */}
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="h6">Pris för produkter (inkl 25% moms)</Typography>
        <Typography variant="body1">{`${total} kr`}</Typography>
      </Box>

      {/* the second "total" should be shipping cost */}
      <Box sx={{ textAlign: 'right' }}>
        <Typography variant="h6">Totalpris (inkl moms & frakt)</Typography>
        <Typography variant="body1">
          {`${
            total +
            (typeof shippingMethod === 'number'
              ? deliveryOptions[shippingMethod].price
              : 0)
          }`}{' '}
          kr
        </Typography>
      </Box>

      {/* the full form with adress, payment and shipping */}
      <OrderForm setShippingMethod={setShippingMethod} />
    </Container>
  )
}

export default CheckOutPage
