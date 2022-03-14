import {
  useFormik,
} from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

type PaymentDetailsSchemaType = Record<keyof PaymentDetails, Yup.AnySchema>;

const PaymentFormSchema = Yup.object().shape<PaymentDetailsSchemaType>({
  cardNumber: Yup.string().required(),
  csv: Yup.string().required(),
  expDate: Yup.string().required(),
  
});

interface PaymentDetails {
  cardNumber: string;
  csv: string;
  expDate: string
  
}

interface Props {
  onSubmit: (PaymentDetails: PaymentDetails) => void;
  defaultPaymentDetails?: PaymentDetails;
}

const emptyForm: PaymentDetails = {
  cardNumber: "",
  csv: "",
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
        label="cardNumber"
        id="cardNumber"
        name="cardNumber"
        type="text"
        value={values.cardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.cardNumber && errors.cardNumber}
      />

      {/* CSV input */}
      <InputField
        label="csv"
        id="csv"
        name="csv"
        type="text"
        value={values.csv}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.csv && errors.csv}
      />

      {/* expiery date input */}
      <InputField
        label="expDate"
        id="expDate"
        name="expDate"
        type="expDate"
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
