import {
  useFormik,
} from "formik";
import * as Yup from "yup";
import InputField from "./InputField";

type ShippingAdressSchemaType = Record<keyof ShippingAdress, Yup.AnySchema>;

const AdressFormSchema = Yup.object().shape<ShippingAdressSchemaType>({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  streetAdress: Yup.string().required(),
  postCode: Yup.string().min(5).max(5).required(),
  city: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  emailAdress: Yup.string().required(),
});

interface ShippingAdress {
  firstName: string;
  lastName: string;
  streetAdress: string;
  postCode: string;
  city: string;
  phoneNumber: string;
  emailAdress: string;
}

interface Props {
  onSubmit: (ShippingAdress: ShippingAdress) => void;
  defaultShippingAdress?: ShippingAdress;
}

const emptyForm: ShippingAdress = {
  firstName: "",
  lastName: "",
  streetAdress: "",
  postCode: "",
  city: "",
  phoneNumber: "",
  emailAdress: "",
};

function ShippingForm(props: Props) {

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<ShippingAdress>({
      initialValues: emptyForm,
      validationSchema: AdressFormSchema,
      onSubmit: (ShippingAdress, { resetForm }) => {
        props.onSubmit(ShippingAdress);
        resetForm()
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {/* First name input */}
      <InputField
        label="firstName"
        id="firstName"
        name="firstName"
        type="text"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.firstName && errors.firstName}
      />

      {/* Last name input */}
      <InputField
        label="lastName"
        id="lastName"
        name="lastName"
        type="text"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.lastName && errors.lastName}
      />

      {/* Street adress input */}
      <InputField
        label="streetAdress"
        id="streetAdress"
        name="streetAdress"
        type="text"
        value={values.streetAdress}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.streetAdress && errors.streetAdress}
      />

      {/* Post code input */}
      <InputField
        label="postCode"
        id="postCode"
        name="postCode"
        type="text"
        value={values.postCode}
        onChange={handleChange}
        onBlur={handleBlur}
        pattern="[0-9]{3}[ ]?[0-9]{2}"
        error={touched.postCode && errors.postCode}
      />

      {/* city input */}
      <InputField
        label="city"
        id="city"
        name="city"
        type="text"
        value={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.city && errors.city}
      />

      {/* phone number input */}
      <InputField
        label="phoneNumber"
        id="phoneNumber"
        name="phoneNumber"
        type="text"
        pattern="[0-9 -+]{}"
        value={values.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.phoneNumber && errors.phoneNumber}
      />

      {/* email adress input */}
      <InputField
        label="emailAdress"
        id="emailAdress"
        name="emailAdress"
        type="text"
        value={values.emailAdress}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.emailAdress && errors.emailAdress}
      />

      <button type="submit">Lägg till adress</button>
    </form>
  );
}

export default ShippingForm;
