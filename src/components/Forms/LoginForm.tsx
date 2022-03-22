import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useUser } from "../../contexts/UserContext";
import InputField from "./InputField";

type LoginDetailsSchemaType = Record<keyof LoginDetails, Yup.AnySchema>;

const LoginFormSchema = Yup.object().shape<LoginDetailsSchemaType>({
  username: Yup.string().required("Vänligen fyll i ditt användarnamn."),
  password: Yup.string().required("Vänligen fyll i ditt lösenord."),
});

export interface LoginDetails {
  username: string;
  password: string;
}

interface Props {
  defaultLoginDetails?: LoginDetails;
}

const emptyForm: LoginDetails = {
  username: "",
  password: "",
};

function LoginForm(props: Props) {
  const userContext = useUser();
  const [submitError, setSubmitError] = useState<string | undefined>(undefined);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
    useFormik<LoginDetails>({
      initialValues: emptyForm,
      validationSchema: LoginFormSchema,
      onSubmit: (loginDetails, { resetForm }) => {
        setSubmitError(undefined);

        userContext
          .login(loginDetails)
          .then(() => {
            resetForm();
          })
          .catch((e) => {
            setSubmitError(e);
          });
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      {!!submitError && <h3>{submitError}</h3>}
      {/* user name input */}
      <InputField
        label="Användarnamn: "
        id="username"
        name="username"
        type="text"
        value={values.username}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.username && !!errors.username
        }
        helperText={touched.username && errors.username}
      />
      <InputField
        label="Lösenord: "
        id="password"
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          touched.password && !!errors.password
        }
        helperText={touched.password && errors.password}
      />
      <button type="submit">Logga in</button>
    </form>
  );
}

export default LoginForm;
