
import {
  useFormik,
} from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

type PaymentDetailsSchemaType = Record<keyof PaymentDetails, Yup.AnySchema>;

const PaymentFormSchema = Yup.object().shape<PaymentDetailsSchemaType>({
  cardNumber: Yup.string().required(),
  cvc: Yup.string().required(),
  expDate: Yup.string().required(),
  
});

interface PaymentDetails {
  cardNumber: string;
  cvc: string;
  expDate: string
  
}

interface Props {
  onSubmit: (PaymentDetails: PaymentDetails) => void;
  defaultPaymentDetails?: PaymentDetails;
}

const emptyForm: PaymentDetails = {
  cardNumber: "",
  cvc: "",
  expDate: "",
};

function PaymentForm(props: Props) {

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<PaymentDetails>({
      initialValues: emptyForm,
      validationSchema: PaymentFormSchema,
      onSubmit: (PaymentDetails, { resetForm }) => {
        props.onSubmit(PaymentDetails);
        resetForm()
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {/* Card number input */}
      <InputField
        label="kortnummer: "
        id="cardNumber"
        name="cardNumber"
        type="text"
        value={values.cardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.cardNumber && errors.cardNumber}
      />

      {/* CVC input */}
      <InputField
        label="cvc: "
        id="cvc"
        name="cvc"
        type="cvc"
        value={values.cvc}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.cvc && errors.cvc}
      />

      {/* expiery date input */}
      <InputField
        label="utgångsdatum: "
        id="expDate"
        name="expDate"
        type="date"
        value={values.expDate}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.expDate && errors.expDate}
      />

      <button type="submit">Lägg till kort</button>
    </form>
  );
}

export default PaymentForm;