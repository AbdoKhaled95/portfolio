import { TextField } from "@mui/material";
import { useFormikContext } from "formik";
import React from "react";

const MainInput = ({ inputKey, type, placeholder, multiline, rows }) => {
  const { values, handleChange, errors, touched, handleBlur } =
    useFormikContext();

  return (
    <TextField
      multiline={multiline}
      rows={rows}
      value={values[inputKey]}
      onChange={handleChange}
      type={type}
      onBlur={handleBlur}
      id={inputKey}
      name={inputKey}
      placeholder={placeholder}
      error={errors?.[inputKey] && touched?.[inputKey]}
      helperText={
        errors?.[inputKey] && touched?.[inputKey] ? errors?.[inputKey] : ""
      }
      sx={{
        "& .MuiInputBase-root": {
          fontSize: { xs: 14, md: 18 },
        },
        "& .MuiFormHelperText-root": {
          fontSize: { xs: 12, md: 14 },
        },
      }}
    />
  );
};
export default MainInput;
