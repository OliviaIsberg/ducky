import { Container, Divider } from "@mui/material";
import { CartType } from "../contexts/Reducers";
import useLocalStorage from "../Hooks/useLocalStorage";

// randomizes a 6 digit order number
function RandomOrderNumber() {
  return Math.floor(Math.random() * 1000000);
}

function ConfirmedOrderPage() {
  // get cart, total cartsum, all orderdetails and shippingdetails from local storage
  const [cart] = useLocalStorage("cart", "");
  const [total] = useLocalStorage("cartSum", 0);
  const [orderDetails] = useLocalStorage("orderDetails", "");
  const [adressDataDetails] = useLocalStorage("orderDetails", "");

  const orderData = Object.entries(orderDetails);
  const adressData = Object.entries(adressDataDetails.shippingAdress);

  return (
    <Container maxWidth="md">
      <h2>Tack för din beställning!</h2>
      <p>
        Din betalning och beställning har genomförts, och snart kommer dina nya
        ankor till sitt nya hem! <br />
        Nedan är en sammanfattning på din beställning;
        <Divider />
      </p>

      {/* get the randomized order number */}
      <h3>Ordernummer: #{RandomOrderNumber()}</h3>

      <h3>Produkter:</h3>
      {/* get the summary of bought products, loops thought cart array */}
      {cart?.length &&
        cart.map((c: CartType) => (
          <p key={c.id}>
            Produkt: {c.title} Antal: {c.qty} Pris: {c.price}/st
          </p>
        ))}

      {/* get and print total price of products */}
      {/* the second "total" should be shipping cost */}
      Totalpris (inkl moms & frakt) : {`${total}`} kr
      <Divider />

      {/* Get shipping adress from local storage  */}
      <h3>Leveransadress:</h3>
      
      {/* first and last name */}
      <>
        {adressData && adressData[0][1]} {adressData && adressData[1][1]}
      </>
      <br />
      {/* shipping adress */}
      <>{adressData && adressData[2][1]}</>
      <br />
      {/* post code and city */}
      <>
        {adressData && adressData[3][1]} {adressData && adressData[4][1]}
      </>
      <br />
      {/* phone number */}
      <>Telefonnummer: {adressData && adressData[5][1]}</>
      <br />
      {/* e-mailadress */}
      <>e-postadress: {adressData && adressData[6][1]}</>
      <br />
      <Divider />

      {/* Get shipping method from local storage  */}
      <h3>Leveransmetod:</h3>
      <>{orderData && orderData[1][1]}</>
      <Divider />

      {/* Get payment method from local storage  */}
      <h3>Betalningsmetod:</h3>
      <>{orderData && orderData[2][1]}</>
      <Divider />

      <p>
        Skulle någonting inte stämma, eller om du har övriga frågor är du varmt
        välkommen att kontakta oss på: support@ducky.se
      </p>

    </Container>
  );
}

export default ConfirmedOrderPage;
