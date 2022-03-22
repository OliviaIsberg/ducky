import ShippingForm, {
  AdressFormSchema,
  emptyShippingForm,
  ShippingAdress,
} from "./ShippingForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import PaymentBox from "./PaymentBox";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import ShipmentBox from "./ShipmentBox";
import {
  emptyPaymentForm,
  PaymentDetails,
  PaymentFormSchema,
} from "./CardPaymentForm";
import { KlarnaDetails, emptyKlarnaForm, KlarnaFormSchema } from "./KlarnaForm";
import { SwishDetails, emptySwishForm, SwishFormSchema } from "./SwishForm";
import { useNavigate } from "react-router-dom";
import { placeOrderFetch } from "../../Api/Api";
import useLocalStorage from "../../Hooks/useLocalStorage";
import { useState } from "react";

export interface OrderData {
  shippingAdress: ShippingAdress;
  paymentDetails: PaymentDetails;
  klarnaDetails: KlarnaDetails;
  swishDetails: SwishDetails;
}

const emptyForm: OrderData = {
  shippingAdress: emptyShippingForm,
  paymentDetails: emptyPaymentForm,
  klarnaDetails: emptyKlarnaForm,
  swishDetails: emptySwishForm,
};

type OrderSchemaType = Record<keyof OrderData, Yup.AnySchema>;

const OrderFormSchema = Yup.object().shape<OrderSchemaType>({
  shippingAdress: AdressFormSchema,
  paymentDetails: PaymentFormSchema,
  klarnaDetails: KlarnaFormSchema,
  swishDetails: SwishFormSchema,
});


interface Props {
  defaultOrderData?: OrderData;
}

function OrderForm(props: Props) {
  let navigate = useNavigate();
  let [isDisabled, setIsDisabled] = useState(false)
  const [orderDetails, setOrderDetails] = useLocalStorage('orderDetails', '')

  function handleSubmit(orderData: OrderData) {
    // useLocalStorage('orderDetails', orderData)
    console.log('hej från handleSubmit')
    console.log(orderData)
    setOrderDetails(orderData)
    setIsDisabled(true)
  }

  const formikProps = useFormik<OrderData>({
    initialValues: emptyForm,
    validationSchema: OrderFormSchema,
    onSubmit: (orderData, { resetForm }) => {
      console.log('hej från onSubmit')
      handleSubmit(orderData);
      resetForm();
    },
  });

  return (
    <form onSubmit={formikProps.handleSubmit}>
      {/* Shipping adress */}
      <h3>Leveransadress</h3>
      <ShippingForm formikProps={formikProps} />

      {/* Shipping methods */}
      <h3>Leveransmetod</h3>
      <ShipmentBox />

      {/* Payment methods (and payment details) */}
      <h3>Betalningsmetod</h3>
      <PaymentBox formikProps={formikProps} />

      {/* Newsletter checkbox, does nothing for now */}
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Ja tack! Jag vill ha nyhetsbrev."
      />

      {/* conditions checkbox, does nothing for now */}
      <FormControlLabel
        control={<Checkbox />}
        label="Jag godkänner köpvillkoren."
      />

      {/* Post form */}
      <Button variant="contained" type='submit' onClick={() => confirmOrder()}>
        Slutför beställning
      </Button>
    </form>
  );
  
  async function confirmOrder() {
    const success = await placeOrderFetch();
    if (success) {  
      navigate("/confirmed-order");
    }
  }
}


export default OrderForm;