import { Container, Divider, Typography } from '@mui/material'
import CartList from '../components/CartList'

function CartPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h2" gutterBottom>
        Din kundkorg
      </Typography>
      <Divider light />
      <CartList />
    </Container>
  )
}

export default CartPage
