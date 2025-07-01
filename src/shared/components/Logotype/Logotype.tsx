import React from "react";
import logo from "../../../assets/images/logo.svg";
import { Box } from "@mui/material";

export const Logotype = () => {
  return (
    <Box>
      <Box component="img" src={logo} />
    </Box>
  );
};
