import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import CustomSlideEmpresas from "../../components/CustomSlideEmpresas";
import mainBg from "../../assets/main-bg.jpg";
import logo from "../../assets/logo.jpg";
import "./styles.css";


export default function Home() {
  // TODO  Integrar com API https://api.adviceslip.com/advice
  const conselhoDoDia =
    "If you can't do anything about it, there's no point in worrying about it.";
  const cardMotivational = (
    <React.Fragment>
      <CardContent>              
        <Typography variant="h5" component="div" textTransform={"uppercase"} color="var(--fontcolorlight)" textAlign={"center"} gutterBottom>
          Conselho do dia
        </Typography>

        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {conselhoDoDia}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  
  return (
    <>
      
          

          <Grid
          md={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h3"
              component="h3"
              sx={{ color: "#06B9FD" }}
            >
              GABRIEL
            </Typography>
            
          </Grid>

          <Grid
          md={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
          <Typography variant="h5" component="h5">
              V I E I R A
            </Typography>
          </Grid>

          {/* CONSELHO DO DIA */}

          {/* <Card
            style={{
              width: "20rem",
              backgroundColor: "#ffffff0",       
            }}
          >
            <Tooltip title="Saiba mais">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            {cardMotivational}
          </Card> */}


          <Grid md={12}>

          <CustomSlideEmpresas></CustomSlideEmpresas>
          </Grid>



      
    </>
  );
}
