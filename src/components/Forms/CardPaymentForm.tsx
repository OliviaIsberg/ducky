
import {
  useFormik,
  FormikConfig
} from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { OrderData } from "./OrderForm";

type PaymentDetailsSchemaType = Record<keyof PaymentDetails, Yup.AnySchema>;

export const PaymentFormSchema = Yup.object().shape<PaymentDetailsSchemaType>({
  cardNumber: Yup.string().required(),
  cvc: Yup.string().required(),
  expDate: Yup.string().required(),
  
});

export interface PaymentDetails {
  cardNumber: string;
  cvc: string;
  expDate: string
  
}

interface Props {
  formikConfig: FormikConfig<OrderData>
}

export const emptyPaymentForm = {
  cardNumber: "",
  cvc: "",
  expDate: "",
}

function CardPaymentForm ({values, handleChange, handleBlur,touched,errors}: Props)  {

  return (
    <>
      {/* Card number input */}
      <InputField
        label="kortnummer: "
        id="cardNumber"
        name="cardNumber"
        type="text"
        value={values.paymentDetails.cardNumber}
        onChange={handleChange.paymentDetails}
        onBlur={handleBlur.paymentDetails}
        error={touched.paymentDetails.cardNumber && errors.paymentDetails.cardNumber}
      />

      {/* CVC input */}
      <InputField
        label="cvc: "
        id="cvc"
        name="cvc"
        type="cvc"
        value={values.paymentDetails.cvc}
        onChange={handleChange.paymentDetails}
        onBlur={handleBlur.paymentDetails}
        error={touched.paymentDetails.cvc && errors.paymentDetails.cvc}
      />

      {/* expiery date input */}
      <InputField
        label="utgångsdatum: "
        id="expDate"
        name="expDate"
        type="date"
        value={values.paymentDetails.expDate}
        onChange={handleChange.paymentDetails}
        onBlur={handleBlur.paymentDetails}
        error={touched.paymentDetails.expDate && errors.paymentDetails.expDate}
      />
    </>
  );
}

export default CardPaymentForm;