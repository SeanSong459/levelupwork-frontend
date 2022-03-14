import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomizedCheckbox from "./CustomizedCheckbox";
import React from "react";

const CheckboxControl = (props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <FormGroup
          sx={{
            color: "#767676",
          }}
        >
          <FormControlLabel
            control={<CustomizedCheckbox />}
            label={props.label}
            sx={{
              "& .MuiFormControlLabel-label": {
                "margin-left": "10px",
                // fontWeight: "600", Cannot write 'font-weight'
              },
            }}
          />
        </FormGroup>
      </ThemeProvider>
    </>
  );
};

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans",
    fontSize: 12,
  },
});

export default CheckboxControl;
