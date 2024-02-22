import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import "./empresas.css";
import Typography from "@mui/material/Typography";


export default function CustomSlideEmpresas() {

  const images = [
    '../assets/empresas/esfera.png',
    '../assets/empresas/einstein.png',
    '../assets/empresas/safra.png',
    '../assets/empresas/placeholder-fpb.jpg',
];

  return (
    <React.Fragment>
      <Box
      className={"footer"}
        sx={{
          alignItems:"center",
          paddingTop: "96px",
          paddingBottom: "40px",
          backgroundColor: "transparent",
          overflow: "hidden",
          width:"100%",
        }}
      >
        <Typography fontStyle={"italic"} fontSize={"14px"}>TRUSTED BY</Typography>
        
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
            paddingTop: "30px",
          }}
        >
          <Grid item xs={6} sm={4} md={2} className="safra">     
          </Grid>
          <Grid item xs={6} sm={4} md={2} className="einstein">
          </Grid>
          <Grid item xs={6} sm={4} md={2} className="esfera">
          </Grid>
          <Grid item xs={6} sm={4} md={2} className="fpb">
          </Grid>

        </Container>



        
      </Box>

    </React.Fragment>
  );
}
