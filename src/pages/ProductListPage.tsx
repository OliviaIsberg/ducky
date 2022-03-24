import { Container, Grid } from '@mui/material'
import ProductCard from '../components/Cards/ProductCard'
import FilterBar from '../components/FilterBar'
import { useProduct, ProductType } from '../contexts/ProductsContext'

function ProductListPage() {
  const { products } = useProduct()

  return (
    <Container maxWidth="md">
      <FilterBar />
      <Grid container sx={{ gap: '1rem' }}>
        {products &&
          products.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Grid>
    </Container>
  )
}

export default ProductListPage
