import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";

export default function CustomSlideEmpresas() {
  return (
    <React.Fragment>
      <Box
        sx={{
          paddingTop: "96px",
          paddingBottom: "96px",
          backgroundColor: "transparent",
          overflow: "hidden",
        }}
      >
        <Container
          sx={{
            width: "100%",
            marginLeft: "auto",
            flexDirection: "row",
            marginRight: "auto",
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "16px",
            paddingRight: "16px",
            border: "1px solid black",
          }}
        >
          <Grid xs={6} sm={4} md={2}>
            SAFRA
          </Grid>
          <Grid xs={6} sm={4} md={2}>
            EINSTEIN
          </Grid>
          <Grid xs={6} sm={4} md={2}>
            FPB
          </Grid>
          <Grid xs={6} sm={4} md={2}>
            ESFERA
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
