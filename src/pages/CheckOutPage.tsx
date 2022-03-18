import { Container } from "@mui/material";
import OrderForm from "../components/Forms/OrderForm";

function CheckOutPage() {
  return (
    <Container maxWidth="md">
      <h2>Kassa</h2>
      {/* < CartSummary /> */}

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
