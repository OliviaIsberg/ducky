import {
  Box,
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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../Api/Data'
import { useCart } from '../contexts/ProductsInCartContext'

interface Props {
  productList: Product[]
}

function ProductListPage({ productList }: Props) {
  const { cart, setCart } = useCart()
  const [products] = useState(productList)
  const [ratingValue] = useState(5)

  return (
    <Container maxWidth="md">
      <Grid container sx={{ gap: '1rem' }}>
        {products &&
          products.map((product) => (
            <Card
              key={product.id}
              sx={{ borderRadius: '1rem', padding: '1rem' }}
            >
              <CardContent sx={{ padding: '0' }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={
                    'https://cdn.pixabay.com/photo/2017/10/05/22/34/rubber-duck-2821371_1280.jpg'
                  }
                />
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBlock: '1rem',
                  }}
                >
                  <Typography
                    variant="h5"
                    component="span"
                    color="primary"
                    fontWeight="700"
                  >
                    {product.title}
                  </Typography>
                  <Box component="span">
                    <Rating name="read-only" value={ratingValue} readOnly />
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {product.information}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: 'space-between',
                  padding: '0',
                  marginTop: '1rem',
                }}
              >
                <Link to={`/products/${product.id}`}>
                  <Button variant="outlined">Visa</Button>
                </Link>
                <Button
                  onClick={() =>
                    setCart([
                      ...cart,
                      { title: product.title, price: product.price },
                    ])
                  }
                  variant="contained"
                  endIcon={<AddShoppingCartIcon />}
                >
                  Köp nu {product.price}kr
                </Button>
              </CardActions>
            </Card>
          ))}
      </Grid>
    </Container>
  )
}

export default ProductListPage
