import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { mockedProducts } from '../Api/Data'

function ProductListPage() {
  const [products] = useState(mockedProducts)
  const [value] = useState(5)

  return (
    <Container maxWidth="md">
      {products.map((product) => (
        <Card key={product.id}>
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
            <Rating name="read-only" value={value} readOnly />
          </CardContent>
          <CardActions>
            <Button>Information</Button>
            <Button variant="contained">Köp nu {product.price}kr</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  )
}

export default ProductListPage
