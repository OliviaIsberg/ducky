import { FormikProps } from "formik";
import * as Yup from "yup";
import InputField from "./InputField";
import { OrderData } from "./OrderForm";

type KlarnaDetailsSchemaType = Record<keyof KlarnaDetails, Yup.AnySchema>;

export const KlarnaFormSchema = Yup.object().shape<KlarnaDetailsSchemaType>({
  personalNumber: Yup.string().required("Vänligen fyll i ditt personnummer."),
});

export interface KlarnaDetails {
  personalNumber: string;
}

interface Props {
  formikProps: FormikProps<OrderData>;
}

export const emptyKlarnaForm: KlarnaDetails = {
  personalNumber: "",
};

function KlarnaForm(props: Props) {
  const { values, handleChange, handleBlur, touched, errors } =
    props.formikProps;

  return (
    <>
      {/* Personal number input */}
      <InputField
        label="personnummer: "
        id="klarnaDetails.personalNumber"
        name="klarnaDetails.personalNumber"
        type="text"
        value={values.klarnaDetails.personalNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.klarnaDetails?.personalNumber &&
          !!errors.klarnaDetails?.personalNumber
        }
        helperText={
          touched.klarnaDetails?.personalNumber &&
          errors.klarnaDetails?.personalNumber
        }
      />
    </>
  );
}

export default KlarnaForm;
