import ShippingForm, { AdressFormSchema, emptyShippingForm, ShippingAdress } from "./ShippingForm"
import {
    useFormik,
  } from "formik";
  import * as Yup from "yup";
import PaymentBox from "./PaymentBox";
import { FormControlLabel, Checkbox, Button } from "@mui/material";
import ShipmentBox from "./ShipmentBox";

export interface OrderData{
    shippingAdress: ShippingAdress
}

const emptyForm: OrderData = {
    shippingAdress: emptyShippingForm
  };

type OrderSchemaType = Record<keyof OrderData, Yup.AnySchema>;

const OrderFormSchema = Yup.object().shape<OrderSchemaType>({
    shippingAdress: AdressFormSchema
})

interface Props {
    onSubmit: (orderData: OrderData) => void;
    defaultOrderData?: OrderData;
  }

function OrderForm(props: Props){
    const{formState: {formikConfig}
} = 
      useFormik<OrderData>({
        initialValues: emptyForm,
        validationSchema: OrderFormSchema,
        onSubmit: (OrderData, { resetForm }) => {
          props.onSubmit(OrderData);
          resetForm()
        },
      });

    return(
        <form onSubmit={formikConfig.handleSubmit}>

            {/* Shipping adress */}
            <h3>Leveransadress</h3>
            <ShippingForm formikConfig={formikConfig}/>

            {/* Shipping methods */}
            <h3>Leveransmetod</h3>
            <ShipmentBox />

            {/* Payment methods (and payment details) */}
            <h3>Betalningsmetod</h3>
            <PaymentBox />

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
            <Button variant="contained" onClick={() => confirmOrder()}>
                Slutför beställning
            </Button>
        </form>
    )
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

export default OrderForm