import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { mockedProducts } from '../Api/Data';
// import useLocalStorage from '../Hooks/useLocalStorage'
import { ProductActions, productReducer } from './Reducers';

export type ProductType = {
  id: number;
  title: string;
  information: string;
  price: number;
  imgURL: string;
};

type PContext = {
  products: ProductType[];
  dispatch: React.Dispatch<ProductActions>;
};

export const ProductContext = createContext<PContext>({} as PContext);

export const ProductsProvider: React.FC = ({ children }) => {
  const lsProducts = localStorage.getItem('products');
  const initialStateProducts =
    lsProducts !== null ? JSON.parse(lsProducts) : mockedProducts;

  const [products, dispatch] = useReducer<
    React.Reducer<ProductType[], ProductActions>
  >(productReducer, initialStateProducts);

  // useLocalStorage('stateLS', '')

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductsProvider;
// useProduct hook
export const useProduct = () => useContext(ProductContext);
