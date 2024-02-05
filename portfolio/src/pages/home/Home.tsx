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
import Footer from "../../components/Footer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';

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
              variant="h2"
              component="h2"
              sx={{ color: "#06B9FD", fontWeight:"bolder" }}
            >
              GABRIEL
            </Typography>
            
          </Grid>

          <Grid
          md={6}
            container
            direction="row"
            justifyContent="center">
          <Typography variant="h4" component="h4" sx={{color: "var(--fontcolorlight)", fontWeight:"100"}}>
              V I E I R A
            </Typography>
          </Grid>

          <Grid
          md={6}
            justifyContent="end"
          >
          <Card
            style={{
              width: "auto",
              backgroundColor: "#ffffff0",       
            }}
          >
            <Tooltip title="Saiba mais">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            {cardMotivational}
          </Card>
          </Grid>

         


          <Grid md={12}>
<Footer></Footer>
          
          </Grid>



      
    </>
  );
}
