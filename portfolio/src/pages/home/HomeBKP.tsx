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
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
// TODO

export default function Home() {
  // TODO  Integrar com API https://api.adviceslip.com/advice
  const conselhoDoDia =
    "If you can't do anything about it, there's no point in worrying about it.";
  const cardMotivational = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Conselho do dia
        </Typography>

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {conselhoDoDia}
        </Typography>
      </CardContent>
 
    </React.Fragment>
  );

  const content = "Teste divider";
  return (
    <>
      <Grid
        xs={12}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{
            width: "100%",
            height: "70vh",
            background:
              "linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(25,107,245,1) 68%, rgba(2,0,36,1) 100%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{ color: "var(--fontcolorlight)", mt: "10%" }}
          >
            GABRIEL
          </Typography>
          <Typography variant="h4" component="h2" sx={{ ml: "10%" }}>
            V I E I R A
          </Typography>
          <Card style={{ position: "absolute", width: "20rem", backgroundColor:"#ffffff8" }}>
            <Tooltip title="Delete">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
            {cardMotivational}
          </Card>
        </Box>

        {/* <Box>
     

  <Divider>CENTER</Divider>
  {content}
  <Divider textAlign="left">LEFT</Divider>
  {content}
  <Divider>
    <Chip label="Chip" size="small" />
  </Divider>
      </Box> */}
      </Grid>

      <CustomSlideEmpresas></CustomSlideEmpresas>
    </>
  );
}
