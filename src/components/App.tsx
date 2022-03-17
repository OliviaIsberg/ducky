import { Route, Routes } from 'react-router-dom';
import ProductListPage from '../pages/ProductListPage';
import Layout from './Layout';
import StartPage from '../pages/StartPage';
import TextPage from '../pages/TextPage';
import CheckOutPage from '../pages/CheckOutPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import { useCart } from '../contexts/ProductsInCartContext';
import FaqPage from '../pages/FaqPage';

function App() {
  const {
    state: { products },
  } = useCart();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="products">
          <Route index element={<ProductListPage />} />
          <Route path=":id" element={<ProductPage productList={products} />} />
        </Route>
        <Route path="cartPage" element={<CartPage />} />
        <Route path="checkoutPage" element={<CheckOutPage />} />
        <Route path="about" element={<TextPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
