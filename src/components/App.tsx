import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Startpage />} />
        <Route path="productListPage" element={<ProductListPage />} />
        <Route path="about" element={<Textpage />} />
      </Route>
    </Routes>
  )
}

export default App
