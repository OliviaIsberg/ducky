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
        label="Kortnummer: "
        id="Kortnummer"
        name="Kortnummer"
        type="text"
        value={values.cardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.cardNumber && errors.cardNumber}
      />

      {/* CSV input */}
      <InputField
        label="CSV: "
        id="CSV"
        name="CSV"
        type="text"
        value={values.csv}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.csv && errors.csv}
      />

      {/* expiery date input */}
      <InputField
        label="Utgångsdatum: "
        id="Utgångsdatum"
        name="Utgångsdatum"
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