import {
    useFormik,
  } from "formik";
  import * as Yup from "yup";
  import { User} from '../../Api/Data'
import { useUser } from "../../contexts/UserContext";
  import InputField from "./InputField";
  
  type LoginDetailsSchemaType = Record<keyof LoginDetails, Yup.AnySchema>;
  
  const LoginFormSchema = Yup.object().shape<LoginDetailsSchemaType>({
    username: Yup.string().required(),
    password: Yup.string().required()
  });
  
  export interface LoginDetails {
    username: string,
    password: string
}

  interface Props {
    defaultLoginDetails?: LoginDetails;
  }
  
  const emptyForm: LoginDetails = {
    username: "",
    password:""
  };
  
  function LoginForm (props: Props) {
   const userContext = useUser()

    const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
      useFormik<LoginDetails>({
        initialValues: emptyForm,
        validationSchema: LoginFormSchema,
        onSubmit: (loginDetails, { resetForm }) => {
        userContext.login(loginDetails);
          resetForm()
        },
      });
  
    return (
      <form onSubmit={handleSubmit}>
        {/* user name input */}
        <InputField
          label="Användarnamn: "
          id="username"
          name="username"
          type="text"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && errors.username}
        />
        <InputField
          label="Lösenord: "
          id="password"
          name="password"
          type="text"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
        />
  
        <button type="submit">Logga in</button>
      </form>
    );
    
}

export default LoginForm