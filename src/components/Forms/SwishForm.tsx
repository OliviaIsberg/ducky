import {
    useFormik,
  } from "formik";
  import * as Yup from "yup";
  import InputField from "./InputField";
  
  type SwishDetailsSchemaType = Record<keyof SwishDetails, Yup.AnySchema>;
  
  const SwishFormSchema = Yup.object().shape<SwishDetailsSchemaType>({
    phoneNumber: Yup.string().required()
  });
  
  interface SwishDetails {
    phoneNumber: string;
  }
  
  interface Props {
    onSubmit: (SwishDetails: SwishDetails) => void;
    defaultSwishDetails?: SwishDetails;
  }
  
  const emptyForm: SwishDetails = {
    phoneNumber: "",
  };
  
  function SwishForm(props: Props) {
  
    const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
      useFormik<SwishDetails>({
        initialValues: emptyForm,
        validationSchema: SwishFormSchema,
        onSubmit: (SwishDetails, { resetForm }) => {
          props.onSubmit(SwishDetails);
          resetForm()
        },
      });
  
    return (
      <form onSubmit={handleSubmit}>
        {/* phone number input */}
        <InputField
          label="Telefonnummer: "
          id="Telefonnummer"
          name="Telefonnummer"
          type="text"
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.phoneNumber && errors.phoneNumber}
        />
  
        <button type="submit">Skicka till Swish</button>
      </form>
    );
  }
  
  export default SwishForm;