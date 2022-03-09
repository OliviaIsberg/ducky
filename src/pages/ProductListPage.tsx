import { useState } from 'react'
import { mockedProducts } from '../Api/Data'

function ProductListPage() {
  const [products] = useState(mockedProducts)

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductListPage
