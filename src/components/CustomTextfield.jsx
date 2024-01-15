import { left } from "@cloudinary/url-gen/qualifiers/textAlignment";
import { InputLabel, TextField } from "@mui/material";
import React from "react";

function CustomTextfield({
  label,
  onChange,
  value,
  required,
  placeholder,
  InputProps,
  disabled,
  type,
  span,
  multiline,
  name,
}) {
  return (
    <div className={"w-full span-2"}>
      {/* <InputLabel id="outlined-basic">{label}</InputLabel> */}

      <TextField
        // margin="normal"
        name={name}
        type={type}
        disabled={disabled}
        label={label}
        id="outlined-basic"
        InputProps={InputProps}
        textAlign={left}
        multiline={multiline}
        // placeholder={placeholder ? placeholder : label}
        // borderRadius={"0.7rem !important"}
        required={required}
        sx={{
          backgroundColor: "white",
          width: "100%",
          // borderRadius: "0.7rem  !important",
          "*": {
            // textAlign:"right !important"
            // borderRadius: "0.7rem !important"
          },
        }}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default CustomTextfield;
