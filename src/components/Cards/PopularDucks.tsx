import { Grid } from '@mui/material'
import { useProduct, ProductType } from '../../contexts/ProductsContext'
import ProductCard from './ProductCard'

function PopularDucks() {
  const { products } = useProduct()

  const popularProducts = products.filter((product) =>
    [1, 5, 8].includes(product.id)
  )

  return (
    <Grid
      container
      sx={{ gap: '1rem', alignItems: 'center', justifyContent: 'center' }}
    >
      {popularProducts &&
        popularProducts.map((product: ProductType) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Grid>
  )
}

export default PopularDucks
