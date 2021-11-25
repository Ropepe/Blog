import React from "react";
import { Button } from "@mui/material";

const ButtonComp = (props) => {
  return (
    <div>
      <Button variant="outlined">{props.naziv}</Button>
    </div>
  );
};

export default ButtonComp;
