import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@mui/material'
import { useParams } from 'react-router-dom'
import { Product } from '../Api/Data'

interface Props {
  productList: Product[]
}

function ProductPage({ productList }: Props) {
  let { id } = useParams()
  const product: Product | undefined = productList.find(
    (item) => item.id.toString() === id
  )

  return (
    <Container maxWidth="md">
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
            <Button variant="contained">Köp nu {product.price}kr</Button>
          </CardActions>
        </Card>
      )}
    </Container>
  )
}

export default ProductPage
