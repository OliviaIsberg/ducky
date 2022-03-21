import { FormikProps } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { OrderData } from "./OrderForm";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

type PaymentDetailsSchemaType = Record<keyof PaymentDetails, Yup.AnySchema>;

export const PaymentFormSchema = Yup.object().shape<PaymentDetailsSchemaType>({
  cardNumber: Yup.string().required("Vänligen fyll i ditt kortnummer."),
  cvc: Yup.string().required("Vänligen fyll i din CVC-kod."),
  expDate: Yup.string().required("Vänligen fyll i utgångsdatum."),
});

export interface PaymentDetails {
  cardNumber: string;
  cvc: string;
  expDate: string;
}

interface Props {
  formikProps: FormikProps<OrderData>;
}

export const emptyPaymentForm = {
  cardNumber: "",
  cvc: "",
  expDate: "",
};

function CardPaymentForm(props: Props) {
  const { values, handleChange, handleBlur, touched, errors } =
    props.formikProps;
  return (
    <>
      {/* Card number input */}
      <InputField
        label="kortnummer: "
        id="paymentDetails.cardNumber"
        name="paymentDetails.cardNumber"
        type="text"
        value={values.paymentDetails.cardNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.paymentDetails?.cardNumber &&
          !!errors.paymentDetails?.cardNumber
        }
        helperText={
          touched.paymentDetails?.cardNumber &&
          errors.paymentDetails?.cardNumber
        }
      />

      {/* CVC input */}
      <InputField
        label="cvc: "
        id="paymentDetails.cvc"
        name="paymentDetails.cvc"
        type="cvc"
        value={values.paymentDetails.cvc}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.paymentDetails?.cvc && !!errors.paymentDetails?.cvc}
        helperText={touched.paymentDetails?.cvc && errors.paymentDetails?.cvc}
      />

      {/* expiery date input */}

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={values.paymentDetails.expDate}
          onChange={handleChange}
          label="Utgångsdatum:"
          renderInput={(params) => (
            <InputField
              label={params.label}
              id="paymentDetails.expDate"
              name="paymentDetails.expDate"
              type="date"
              placeholder=""
              onBlur={handleBlur}
              error={
                touched.paymentDetails?.expDate &&
                !!errors.paymentDetails?.expDate
              }
              helperText={
                touched.paymentDetails?.expDate &&
                errors.paymentDetails?.expDate
              }
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
}

export default CardPaymentForm;
