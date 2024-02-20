import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../styles/styles.css";
import Footer from "../../components/Footer";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Nome from "../../components/Nome";

export default function Home() {
  // TODO  Integrar com API https://api.adviceslip.com/advice
  const conselhoDoDia =
    "If you can't do anything about it, there's no point in worrying about it.";
  const cardMotivational = (
    <React.Fragment>
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          textTransform={"uppercase"}
          color="var(--fontcolorlight)"
          textAlign={"center"}
          gutterBottom
        >
          Conselho do dia
        </Typography>

        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {conselhoDoDia}
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Nome></Nome>

      {/* CONSELHOS MOTIVACIONAIS */}
      {/* <Grid xs={12} md={6}>
        <Box
          sx={{
            backgroundColor: "#ffffff1c",
          }}
        >
          <Card>
            <Tooltip title="Saiba mais">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            {cardMotivational}
          </Card>
        </Box>
      </Grid> */}

      

      <Grid md={12}>
        <Footer></Footer>
      </Grid>
      </React.Fragment>
    
  );
}
