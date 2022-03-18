
import {
  FormikConfig
  } from "formik";
  import * as Yup from "yup";
  import InputField from "./InputField";
  import { OrderData } from "./OrderForm";
  
  type ShippingAdressSchemaType = Record<keyof ShippingAdress, Yup.AnySchema>;
  
  export const AdressFormSchema = Yup.object().shape<ShippingAdressSchemaType>({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    streetAdress: Yup.string().required(),
    postCode: Yup.string().min(5).max(5).required(),
    city: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    emailAdress: Yup.string().required(),
  });
  
  export interface ShippingAdress {
    firstName: string;
    lastName: string;
    streetAdress: string;
    postCode: string;
    city: string;
    phoneNumber: string;
    emailAdress: string;
  }
  
  interface Props {
    formikConfig: FormikConfig<OrderData>
  }
  
  export const emptyShippingForm =  {
    firstName: "",
    lastName: "",
    streetAdress: "",
    postCode: "",
    city: "",
    phoneNumber: "",
    emailAdress: ""}
  
  function ShippingForm({values}: Props) {

  
    return (
      <>
        {/* First name input */}
        <InputField
          label="förnamn: "
          id="firstName"
          name="firstName"
          type="text"
          value={values.shippingAdress.firstName}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          error={touched.shippingAdress.firstName && errors.shippingAdress.firstName}
        />
  
        {/* Last name input */}
        <InputField
          label="efternamn: "
          id="lastName"
          name="lastName"
          type="text"
          value={values.shippingAdress.lastName}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          error={touched.shippingAdress.lastName && errors.shippingAdress.lastName}
        />
  
        {/* Street adress input */}
        <InputField
          label="postadress: "
          id="streetAdress"
          name="streetAdress"
          type="text"
          value={values.shippingAdress.streetAdress}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          error={touched.shippingAdress.streetAdress && errors.shippingAdress.streetAdress}
        />
  
        {/* Post code input */}
        <InputField
          label="postnummer: "
          id="postCode"
          name="postCode"
          type="text"
          value={values.shippingAdress.postCode}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          pattern="[0-9]{3}[ ]?[0-9]{2}"
          error={touched.shippingAdress.postCode && errors.shippingAdress.postCode}
        />
  
        {/* city input */}
        <InputField
          label="stad: "
          id="city"
          name="city"
          type="text"
          value={values.shippingAdress.city}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          error={touched.shippingAdress.city && errors.shippingAdress.city}
        />
  
        {/* phone number input */}
        <InputField
          label="telefonnummer: "
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          pattern="[0-9 -+]{}"
          value={values.shippingAdress.phoneNumber}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          error={touched.shippingAdress.phoneNumber && errors.shippingAdress.phoneNumber}
        />
  
        {/* email adress input */}
        <InputField
          label="e-postadress: "
          id="emailAdress"
          name="emailAdress"
          type="text"
          value={values.shippingAdress.emailAdress}
          onChange={handleChange.shippingAdress}
          onBlur={handleBlur.shippingAdress}
          error={touched.shippingAdress.emailAdress && errors.shippingAdress.emailAdress}
        />
      </>
    );
  }
  
  export default ShippingForm;