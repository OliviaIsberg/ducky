import { Route, Routes } from 'react-router-dom'
import ProductListPage from '../pages/ProductListPage'
import Layout from './Layout'
import StartPage from '../pages/StartPage'
import TextPage from '../pages/TextPage'
import CheckOutPage from '../pages/CheckOutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<StartPage />} />
        <Route path="productListPage" element={<ProductListPage />} />
        <Route path="checkoutPage" element={<CheckOutPage />} />
        <Route path="about" element={<TextPage />} />
      </Route>
    </Routes>
  )
}

export default App
