import { Container, Grid } from '@mui/material'
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react'
import { useCart } from '../contexts/ProductsInCartContext'
import ProductCard from '../components/Cards/ProductCard'
import FilterBar from '../components/FilterBar'

function ProductListPage() {
  const {
    state: { products },
  } = useCart()

  return (
    <Container maxWidth="md">
      <FilterBar />
      <Grid container sx={{ gap: '1rem' }}>
        {products &&
          products.map(
            (product: {
              id: Key | null | undefined
              title:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined
              information:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined
              price:
                | boolean
                | ReactChild
                | ReactFragment
                | ReactPortal
                | null
                | undefined
            }) => <ProductCard key={product.id} product={product} />
          )}
      </Grid>
    </Container>
  )
}

export default ProductListPage
