import { Formik, Form, Field } from 'formik';
import { Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import { useState } from 'react';

const SubscribeSchema = Yup.object().shape({
  email: Yup.string().email('Ogiltig email adress').required('Obligatorisk'),
});

function SubscribeForm() {
  const [state, setState] = useState({
    submitted: false,
    email: '',
  });

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
          setState({ submitted: true, email: values.email });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" />
            <Button type="submit">Prenumerera</Button>
            {errors.email && touched.email && <div>{errors.email}</div>}
          </Form>
        )}
      </Formik>
      {state.submitted ? <p>Tack för anmälan {state.email}</p> : ''}
    </div>
  );
}

export default SubscribeForm;
