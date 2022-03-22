import { FormikProps } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { OrderData } from "./OrderForm";

type SwishDetailsSchemaType = Record<keyof SwishDetails, Yup.AnySchema>;

export const SwishFormSchema = Yup.object().shape<SwishDetailsSchemaType>({
  phoneNumber: Yup.string().required("Vänligen fyll i ditt telefonnummer."),
});

export interface SwishDetails {
  phoneNumber: string;
}

interface Props {
  formikProps: FormikProps<OrderData>;
}

export const emptySwishForm: SwishDetails = {
  phoneNumber: "",
};

function SwishForm(props: Props) {
  const { values, handleChange, handleBlur, touched, errors } =
    props.formikProps;

  return (
    <>
      {/* phone number input */}
      <InputField
        label="telefonnummer: "
        id="swishDetails.phoneNumber"
        name="swishDetails.phoneNumber"
        type="text"
        value={values.swishDetails.phoneNumber || values.shippingAdress.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.swishDetails?.phoneNumber &&
          !!errors.swishDetails?.phoneNumber
        }
        helperText={
          touched.swishDetails?.phoneNumber && errors.swishDetails?.phoneNumber
        }
      />
    </>
  );
}

export default SwishForm;
