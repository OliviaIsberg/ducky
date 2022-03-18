import { Box, TextField, TextFieldProps } from "@mui/material";
import { FormikProps } from "formik";
import { InputHTMLAttributes, ReactNode } from "react";
import { OrderData } from "./OrderForm";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | false;
  }

  function InputField(props: TextFieldProps) {
    return (
      <>
        <Box sx={{'& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="on"
          >
          <TextField {...props} variant="outlined" />
        </Box>
      </>
    );
  }

  export default InputField