import React from "react";
import { makeStyles } from "@mui/styles";
import Checkbox from "@mui/material/Checkbox";

const useStyles = makeStyles({
  root: {
    padding: "0",
    margin: "0px 16px 0px 9px",
  },
});

const CustomizedCheckbox = () => {
  const classes = useStyles();

  return <Checkbox className={classes.root} />;
};

export default CustomizedCheckbox;
