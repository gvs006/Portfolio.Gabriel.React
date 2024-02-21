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
import IconButton from "@mui/material/IconButton";
import InfoRounded from "@mui/icons-material/InfoRounded";


export default function Home() {
  // TODO  Integrar com API https://api.adviceslip.com/advice
  const conselhoDoDia = {
    advice:"If you can't do anything about it, there's no point in worrying about it."
  }


  const tooltipApi = (
    <React.Fragment>
      <Tooltip title="Chamada de API para geração de mensagens motivacionais">
  <IconButton>
    <InfoRounded />
  </IconButton>
</Tooltip>
    </React.Fragment>
  );
    
  const cardMotivational = (
    <React.Fragment>
      <CardContent>

        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {conselhoDoDia.advice} {tooltipApi}
        </Typography>
      <Typography
         
          gutterBottom
        >
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <React.Fragment>
      <Nome></Nome>

      {/* CONSELHOS MOTIVACIONAIS */}
      <Grid item xs={12} md={6} direction={"column"}>
      <Box>
      {conselhoDoDia.advice && (
      
         
              <Card className="cardMotivational">
              {cardMotivational}
              </Card>
        
            
)}
</Box>
</Grid>
      

      

      

      <Grid md={12}>
        <Footer></Footer>
      </Grid>
      </React.Fragment>
    
  );
}
