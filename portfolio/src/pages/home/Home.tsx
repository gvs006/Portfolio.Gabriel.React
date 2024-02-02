import Grid from "@mui/material/Grid";
import "../../styles.css";
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

// TODO


export default function Home() {


  

  // TODO  Integrar com API https://api.adviceslip.com/advice
const conselhoDoDia ="If you can't do anything about it, there's no point in worrying about it."
  const fraseMotivacionalRandomCard = (
    <React.Fragment>
      
      <CardContent>
        
        <Typography variant="h5" component="div">
          Conselho do dia
        </Typography>
       
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {conselhoDoDia}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Como são gerados os conselhos aqui? Explicar sobre api</Button>
      </CardActions>
    </React.Fragment>
  );

  const content = "Teste divider"
  return (
    <>


   
      <Grid xs={12} display="flex" justifyContent="space-between" alignItems="center">
      
        <Box sx={{ width: '100%', height:'600px', backgroundColor:'#2B3080'}}>
        <Typography variant="h2" component="h2" sx={{mt: "10%"}}>
        GABRIEL
      
      </Typography>
      <Typography variant="h4" component="h2" sx={{ml: "10%"}}>
         V I E I R A
      
      </Typography>
          <Card style={{ width: "20rem" }}>{fraseMotivacionalRandomCard}</Card>
        </Box>
        
      </Grid>


      
        

    
      <Box>
      <CustomSlideEmpresas></CustomSlideEmpresas>

  <Divider>CENTER</Divider>
  {content}
  <Divider textAlign="left">LEFT</Divider>
  {content}
  <Divider>
    <Chip label="Chip" size="small" />
  </Divider>
      </Box>


      <Box>FOOTER</Box>
      


    </>
  );
}
