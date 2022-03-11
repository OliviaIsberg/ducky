import { Button, Checkbox, Container, FormControlLabel } from "@mui/material";
import PaymentBox from "../components/Forms/PaymentBox";
import PaymentForm from "../components/Forms/PaymentForm";
import ShipmentBox from "../components/Forms/ShipmentBox";
import ShippingForm from "../components/Forms/ShippingForm";

function onShippingSubmit(){

}

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
      <h3>Delivery adress</h3>
      <ShippingForm onSubmit={onShippingSubmit}/>
      <h3>Delivery method</h3>
      <ShipmentBox />

      <h3>Payment method</h3>
      <PaymentBox />
      <h3>Payment details</h3>
      {/* Newsletter checkbox, does nothing for now */}
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Ja tack! Jag vill ha nyhetsbrev."
      />

<FormControlLabel
        control={<Checkbox />}
        label="Jag godkänner köpvillkor."
      />
<Button variant="contained">Slutför beställning</Button>
    </Container>
  );
}

export default CheckOutPage;