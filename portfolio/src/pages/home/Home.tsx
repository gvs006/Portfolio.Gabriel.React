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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CustomSlideEmpresas from "../../components/CustomSlideEmpresas";

// TODO
const menuPoint = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
export default function Home() {
  

  const card = (
    <React.Fragment>
      <CardContent>
      <Typography variant="h5" component="div">
        Cadastro
        </Typography>

  
        <Typography variant="body2">
        Acesse nosso formulário rápido ou faça login utilizando sua conta Google, Apple ou Facebook.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="/register">CADASTRAR</Button>
      </CardActions>
    </React.Fragment>
  );

  const card2 = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{menuPoint}nev{menuPoint}o{menuPoint}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

function handleChange() {
    console.log("Mudou Tabs");
    
}
  const value = "TAB"

  // TODO  Integrar com API https://api.adviceslip.com/advice
const conselhoDoDia ="Beba muita água"
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  const content = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <>

<Box display="flex" justifyContent="center">
    <h1>GABRIEL VIEIRA</h1>
<Typography sx={{ mt: 7.5, border: "1px solid purple", borderRadius:"5%" }} color="text.secondary">
          Curriculum Interativo
        </Typography>
        </Box>


    <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
<Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
  <Tab label="INÍCIO" />{menuPoint}
  <Tab label="PROJETOS PESSOAIS" />{menuPoint}
  <Tab label="CONTATO" href={`/contato`} />{menuPoint}
</Tabs>


    </Grid>
   
      <Grid xs={12} display="flex" justifyContent="space-between" alignItems="center">

        
        <Card style={{ width: "20rem" }}>{card}</Card>
        <Card style={{ width: "20rem" }}>{card2}</Card>
        <Card style={{ width: "20rem" }}>{fraseMotivacionalRandomCard}</Card>
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
