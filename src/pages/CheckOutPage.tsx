import { Container, Divider } from "@mui/material";
import OrderForm from "../components/Forms/OrderForm";
import useLocalStorage from "../Hooks/useLocalStorage";
import { CartType } from "../contexts/Reducers";
import { useState } from "react";
import { deliveryOptions } from "../Api/Data";

function CheckOutPage() {
  // get cart and total price from cart
  const [cart] = useLocalStorage<CartType[]>("cart", "");
  const [total] = useLocalStorage<number>("cartSum", 0);
  const [shippingMethod,setShippingMethod] = useState<number | undefined>(undefined)

  return (
    <Container maxWidth="md">
      <h2>Kassa</h2>
      {/* cart summary, loops throught cart array */}
      <h3>Din kundkorg:</h3>
      {cart?.length &&
        cart.map((c: CartType) => (
          <p key={c.id}>
            Produkt: {c.title} Antal: {c.qty} Pris: {c.price}/st
          </p>
        ))}

      {/* get and print total price of products */}
      <p>Pris för produkter (inkl 25% moms) : {`${total}`} kr</p>

      {/* the second "total" should be shipping cost */}
      <p>Totalpris (inkl moms & frakt) : {`${total + (typeof shippingMethod === 'number' ? deliveryOptions[shippingMethod].price : 0)}`}</p>

      <Divider />
      
      {/* the full form with adress, payment and shipping */}
      <OrderForm setShippingMethod={setShippingMethod}/>
    </Container>
  );
}

export default CheckOutPage;
