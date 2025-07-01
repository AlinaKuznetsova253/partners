import React from "react";
import { Box } from "@mui/material";
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa6";

export const SocialIcons = () => {
  return (
    <Box sx={{ display: "flex", gap: "50px" }}>
      <FaTelegram size={40} color="#fff" />
      <FaWhatsapp size={40} color="#fff" />
      <FaInstagram size={40} color="#fff" />
    </Box>
  );
};
