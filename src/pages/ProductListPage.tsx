import { Container, Grid } from '@mui/material'
import ProductCard from '../components/Cards/ProductCard'
import { useProduct, ProductType } from '../contexts/ProductsContext'

function ProductListPage() {
  const { products } = useProduct()

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {products &&
          products.map((product: ProductType) => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
              <ProductCard key={product.id} product={product} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default ProductListPage
