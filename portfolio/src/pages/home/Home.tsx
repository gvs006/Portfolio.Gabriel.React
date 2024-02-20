import Grid from "@mui/material/Grid";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../../styles/styles.css";
import Footer from "../../components/Footer";
import Nome from "../../components/Nome";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Tooltip from "@mui/material/Tooltip";


export default function Home() {
  // TODO  Integrar com API https://api.adviceslip.com/advice
  const conselhoDoDia =
    "If you can't do anything about it, there's no point in worrying about it.";
  const cardMotivational = (
    <React.Fragment>
      <CardContent>

        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {conselhoDoDia}
        </Typography>
      <Typography
          variant="h6"
          component="div"
          textTransform={"uppercase"}
          color="var(--light3)"
          textAlign={"center"}
          gutterBottom
        >
          API MOTIVACIONAL
        </Typography>
      </CardContent>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Nome></Nome>

      {/* CONSELHOS MOTIVACIONAIS */}
      <Grid item xs={12} md={6}>
        <Box>       
          <Card className="cardMotivational">

            {cardMotivational}
          </Card>
        </Box>
      </Grid>

      

      <Grid md={12}>
        <Footer></Footer>
      </Grid>
      </React.Fragment>
    
  );
}
