import { Formik, Form, Field } from 'formik';
import { Button, Typography } from '@mui/material';
import * as Yup from 'yup';

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email('Ogiltig email adress').required('Obligatorisk'),
});

function SubscribeForm() {
  return (
    <div>
      <Typography variant="h6">Anmäl dig till vårt nyhetsbrev</Typography>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={SubscribeSchema}
        onSubmit={(values, { resetForm }) => {
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Button type="submit">Följ</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SubscribeForm;
