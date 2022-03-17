import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
} from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { placeOrderFetch } from "../Api/Api";
import PaymentBox from "../components/Forms/PaymentBox";
import ShipmentBox from "../components/Forms/ShipmentBox";
import ShippingForm from "../components/Forms/ShippingForm";
import ConfirmedOrderPage from "./ConfirmedPage";

function onShippingSubmit() {}

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
      <h3>Leveransadress</h3>
      <ShippingForm onSubmit={onShippingSubmit} />
      <h3>Leveransmetod</h3>
      <ShipmentBox />

      <h3>Betalningsmetod</h3>
      <PaymentBox />
      <h3>Betalningsdetaljer</h3>
      {/* Newsletter checkbox, does nothing for now */}
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Ja tack! Jag vill ha nyhetsbrev."
      />

      <FormControlLabel
        control={<Checkbox />}
        label="Jag godkänner köpvillkoren."
      />
      <Button variant="contained" onClick={() => confirmOrder()}>
        Slutför beställning
      </Button>
    </Container>
  );
}

async function confirmOrder() {
  // const success = await placeOrderFetch()
  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate('/confirmed-order')}
  // if (success) {
  //   return <Navigate replace = {true} to ='/confirmed-order' />
  // }
}

export default CheckOutPage;
