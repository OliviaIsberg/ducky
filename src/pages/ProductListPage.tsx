import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Rating,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { mockedProducts } from '../Api/Data'

function ProductListPage() {
  const [products] = useState(mockedProducts)
  const [ratingValue] = useState(5)

  return (
    <Container maxWidth="md">
      <Grid container sx={{ gap: '1rem' }}>
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
              <Rating name="read-only" value={ratingValue} readOnly />
            </CardContent>
            <CardActions>
              <Button>Information</Button>
              <Button variant="contained">Köp nu {product.price}kr</Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

export default ProductListPage
