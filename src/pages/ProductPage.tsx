import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link, useParams } from 'react-router-dom'
import BuyButton from '../components/BuyButton'
import { ProductType, useCart } from '../contexts/ProductsInCartContext'

function ProductPage() {
  let { id } = useParams()
  const {
    state: { cart, products },
    dispatch,
  } = useCart()
  const product = products.find(
    (item: ProductType) => item.id.toString() === id
  )

  return (
    <Container maxWidth="md">
      <Link to="/products">
        <Button startIcon={<ArrowBackIcon />}>
          Tillbaka till produktsidan
        </Button>
      </Link>
      {product && (
        <Card>
          <CardContent>
            <CardMedia
              component="img"
              height="240"
              image={
                'https://cdn.pixabay.com/photo/2017/10/05/22/34/rubber-duck-2821371_1280.jpg'
              }
            />
            <Typography variant="h5" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.information}
            </Typography>
            {/* <Rating name="read-only" value={ratingValue} readOnly /> */}
          </CardContent>
          <CardActions>
            {cart.some((p: any) => p.id === product.id) ? (
              <Button>I kundkorgen</Button>
            ) : (
              <BuyButton dispatch={dispatch} product={product} />
            )}
          </CardActions>
        </Card>
      )}
    </Container>
  )
}

export default ProductPage
