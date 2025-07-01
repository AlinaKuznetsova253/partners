import React from "react";
import { Box } from "@mui/material";

import { Logotype } from "../../../../shared/components/Logotype";
import { SocialIcons } from "../../../../shared/components/SocialIcons";
import { headerStyles } from "./style.ts";

export const HeroHeader = () => {
  return (
    <Box component="header" sx={headerStyles}>
      <Logotype />
      <SocialIcons />
    </Box>
  );
};
