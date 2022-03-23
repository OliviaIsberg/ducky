import { Box, Grid } from '@mui/material';
import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import { useCart } from '../../contexts/ProductsInCartContext';
import ProductCard from './ProductCard';

function PopularDucks() {
  const {
    state: { products },
  } = useCart();

  const popularProducts = products.filter((product) =>
    [1, 5, 8].includes(product.id)
  );

  return (
    <Grid
      container
      sx={{ gap: '1rem', alignItems: 'center', justifyContent: 'center' }}
    >
      {popularProducts &&
        popularProducts.map(
          (product: {
            id: Key | null | undefined;
            title:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            information:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
            price:
              | boolean
              | ReactChild
              | ReactFragment
              | ReactPortal
              | null
              | undefined;
          }) => <ProductCard key={product.id} product={product} />
        )}
    </Grid>
  );
}

export default PopularDucks;
