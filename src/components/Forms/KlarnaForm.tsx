import {
    useFormik,
  } from "formik";
  import * as Yup from "yup";
  import InputField from "./InputField";
  
  type KlarnaDetailsSchemaType = Record<keyof KlarnaDetails, Yup.AnySchema>;
  
  const KlarnaFormSchema = Yup.object().shape<KlarnaDetailsSchemaType>({
    personalNumber: Yup.string().required()
  });
  
  interface KlarnaDetails {
    personalNumber: string;
  }
  
  interface Props {
    onSubmit: (KlarnaDetails: KlarnaDetails) => void;
    defaultKlarnaDetails?: KlarnaDetails;
  }
  
  const emptyForm: KlarnaDetails = {
    personalNumber: "",
  };
  
  function KlarnaForm(props: Props) {
  
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
      useFormik<KlarnaDetails>({
        initialValues: emptyForm,
        validationSchema: KlarnaFormSchema,
        onSubmit: (KlarnaDetails, { resetForm }) => {
          props.onSubmit(KlarnaDetails);
          resetForm()
        },
      });
  
    return (
      <form onSubmit={handleSubmit}>
        {/* Personal number input */}
        <InputField
          label="personnummer: "
          id="personalNumber"
          name="personalNumber"
          type="text"
          value={values.personalNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.personalNumber && errors.personalNumber}
        />
  
        <button type="submit">Lägg till personnummer</button>
      </form>
    );
  }
  
  export default KlarnaForm;