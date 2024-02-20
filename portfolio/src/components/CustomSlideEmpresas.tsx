import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import "./empresas.css";

export default function CustomSlideEmpresas() {
  return (
    <React.Fragment>
      <Box
      className={"footer"}
        sx={{
          alignItems:"center",
          paddingTop: "96px",
          paddingBottom: "96px",
          backgroundColor: "transparent",
          overflow: "hidden",
          width:"100%"
        }}
      >
        <Container
          sx={{
            width: "90%",
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
          <Grid xs={6} sm={4} md={2} className="safra">     
          </Grid>
          <Grid xs={6} sm={4} md={2} className="einstein">
          </Grid>
          <Grid xs={6} sm={4} md={2} className="fpb">
          </Grid>
          <Grid xs={6} sm={4} md={2} className="esfera">
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
