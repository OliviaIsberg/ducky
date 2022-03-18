import { Box, TextField, TextFieldProps } from "@mui/material";

function InputField(props: TextFieldProps) {
  return (
    <>
      <Box
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="on"
      >
        <TextField {...props} variant="outlined" />
      </Box>
    </>
  );
}

export default InputField;
