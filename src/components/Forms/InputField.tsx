import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string | false;
  }

  function InputField({ label, error,id , ...props }: Props) {
    return (
      <div>
        <label htmlFor={id}>
          {label}
        </label>
        <input id={id} {...props} />
  
        {/* error message if required input is not fullfilled */}
        {error && <p>{error}</p>}
      </div>
    );
  }

  export default InputField