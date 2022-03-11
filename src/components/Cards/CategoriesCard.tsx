import { useState } from "react";
import { mockedProducts } from "../../Api/Data";

function CategoriesCard() {
  const [products] = useState(mockedProducts);
}

export default CategoriesCard;
