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
import { Link, useNavigate } from "react-router-dom";
import { placeOrderFetch } from "../../Api/Api";
import useLocalStorage from "../../Hooks/useLocalStorage";

export interface OrderData {
  shippingAdress: ShippingAdress;
  paymentMethod: string | number | readonly string[] | undefined;
  shippingMethod: String;
  cardNumber: string;
  cvc: string;
  expDate: string;
  personalNumber: string;
  phoneNumber: string;
}

const emptyForm: OrderData = {
  shippingAdress: emptyShippingForm,
  paymentMethod: "",
  shippingMethod: "",
  cardNumber: "",
  cvc: "",
  expDate: "",
  personalNumber: "",
  phoneNumber: "",
};

export type OrderSchemaType = Record<keyof OrderData, Yup.AnySchema>;

const OrderFormSchema = Yup.object().shape<OrderSchemaType>({
  shippingAdress: AdressFormSchema,
  paymentMethod: Yup.string().required("Du måste välja ett betalsätt"),
  shippingMethod: Yup.string().required("Du måste välja ett fraktsätt"),
  cardNumber: Yup.string().when("paymentMethod", {
    is: "card",
    then: (schema) => schema.required("Vänligen fyll i ditt kortnummer."),
  }),
  cvc: Yup.string().when("paymentMethod", {
    is: "card",
    then: (schema) => schema.required("Vänligen fyll i din CVC-kod."),
  }),
  expDate: Yup.string().when("paymentMethod", {
    is: "card",
    then: (schema) => schema.required("Vänligen fyll i utgångsdatum."),
  }),
  personalNumber: Yup.string().when("paymentMethod", {
    is: "klarna",
    then: (schema) => schema.required("Vänligen fyll i ditt personnummer."),
  }),
  phoneNumber: Yup.string().when("paymentMethod", {
    is: "swish",
    then: (schema) => schema.required("Vänligen fyll i ditt telefonnummer."),
  }),
});

interface Props {
  defaultOrderData?: OrderData;
}

function OrderForm(props: Props) {
  let navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useLocalStorage("orderDetails", "");

  function handleSubmit(orderData: OrderData) {
    setOrderDetails(orderData);
    confirmOrder();
  }

  const formikProps = useFormik<OrderData>({
    initialValues: emptyForm,
    validationSchema: OrderFormSchema,
    onSubmit: (orderData) => {
      handleSubmit(orderData);
    },
  });

  return (
    <form onSubmit={formikProps.handleSubmit}>
      {/* Shipping adress */}
      <h3>Leveransadress</h3>
      <ShippingForm formikProps={formikProps} />

      {/* Shipping methods */}
      <h3>Leveransmetod</h3>

      {/* Show error if no shipping method is selected */}
      {formikProps.touched.shippingMethod && formikProps.errors.shippingMethod}

      <ShipmentBox formikProps={formikProps} />

      {/* Payment methods (and payment details) */}
      <h3>Betalningsmetod</h3>

      {/* Show error if no payment method is selected */}
      {formikProps.touched.paymentMethod && formikProps.errors.paymentMethod}

      <PaymentBox formikProps={formikProps} />

      {/* Newsletter checkbox, does nothing for now */}
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Ja tack! Jag vill ha nyhetsbrev."
      />

      {/* conditions checkbox, does nothing for now */}
      <div>
        <FormControlLabel control={<Checkbox />} label="Jag godkänner" />
        <Link to="/termsOfUse">Köpvillkoren.</Link>
      </div>
      {/* Post form */}
      <Button variant="contained" type="submit">
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
