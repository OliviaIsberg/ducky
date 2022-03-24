import { Container } from "@mui/material";
import OrderForm from "../components/Forms/OrderForm";
import useLocalStorage from "../Hooks/useLocalStorage";

function CheckOutPage() {
  const [total, setTotal] = useLocalStorage('cartSum', 0)
  return (
    <Container maxWidth="md">
      <h2>Kassa</h2>
      {/* < CartSummary /> */}
      <p>Pris för produkter: {`${total}`} kr</p>
      <p>Fraktsätt:</p>
      {/* the second "total" should be shipping cost */}
      <p>Totalpris inklusive frakt: {`${total+total}`}</p>

      <h3>Välj dina betal och leveransmetoder</h3>

      <p>
        Beställningar som görs innan kl 16.00 skickas samma dag. Ange uppgifter
        nedan för att se tillgängliga leveransval.
      </p>

      <OrderForm />
    </Container>
  );
}

export default CheckOutPage;
