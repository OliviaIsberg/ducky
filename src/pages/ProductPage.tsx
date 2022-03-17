import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import { Product } from '../Api/Data'
import BuyButton from '../components/BuyButton'
import { useCart } from '../contexts/ProductsInCartContext'

interface Props {
  productList: Product[]
}

function ProductPage({ productList }: Props) {
  let { id } = useParams()
  const {
    state: { cart },
    dispatch,
  } = useCart()
  const product: Product | undefined = productList.find(
    (item) => item.id.toString() === id
  )

  return (
    <Container maxWidth="md">
      <Link to="/products">Tillbaka till produktsidan</Link>
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
