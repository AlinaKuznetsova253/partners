import React from "react";
import { Box, Container, Grid } from "@mui/material";

import { HeroHeader } from "./components/HeroHeader";
import { heroSectionStyles } from "./styles";

export const HeroModule = () => {
  return (
    <Box component="section" sx={heroSectionStyles}>
      <Container sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <HeroHeader />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
