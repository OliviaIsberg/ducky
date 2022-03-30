import { Grid } from '@mui/material';
import { useState } from 'react';
import { useProduct, ProductType } from '../../contexts/ProductsContext';
import ProductCard from './ProductCard';

function getRandomProducts(products: ProductType[], numberOfIndicies: number) {
  let randomProducts: ProductType[] = new Array<ProductType>(numberOfIndicies);
  let productIndicies: number[] = new Array<number>();

  while (productIndicies.length < numberOfIndicies) {
    let index = Math.floor(Math.random() * products.length);
    if (!productIndicies.includes(index)) {
      productIndicies.push(index);
    }
  }

  for (let i = 0; i < numberOfIndicies; i++) {
    randomProducts[i] = products[productIndicies[i]];
  }

  return randomProducts;
}

function PopularDucks() {
  const { products } = useProduct();

  const [popularProducts] = useState(getRandomProducts(products, 3));

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
  );
}

export default PopularDucks;
