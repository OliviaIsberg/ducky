import { Container, Grid } from '@mui/material';
import { ProductType, useCart } from '../contexts/ProductsInCartContext';
import ProductCard from '../components/Cards/ProductCard';
import FilterBar from '../components/FilterBar';

function ProductListPage() {
  const {
    state: { products },
  } = useCart();

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
  );
}

export default ProductListPage;
