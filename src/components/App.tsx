import { Route, Routes } from "react-router-dom";
import ProductListPage from "../pages/ProductListPage";
import Layout from "./Layout";
import StartPage from "../pages/StartPage";
import TextPage from "../pages/TextPage";
import CheckOutPage from "../pages/CheckOutPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import { mockedProducts, Product} from "../Api/Data";
import { useState } from "react";
import ConfirmedOrderPage from "../pages/ConfirmedPage";

function App() {
  const [products] = useState<Product[]>(mockedProducts);

  return ( 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<StartPage />} />
          <Route path="products">
            <Route index element={<ProductListPage productList={products} />} />
            <Route
              path=":id"
              element={<ProductPage productList={products} />}
            />
          </Route>
          <Route path="checkoutPage" element={<CheckOutPage />} />
          <Route path="confirmed-order" element={<ConfirmedOrderPage />} />
          <Route path="about" element={<TextPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
  )
};


export default App;
