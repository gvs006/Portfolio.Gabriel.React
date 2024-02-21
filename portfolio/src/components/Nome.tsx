import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Nome() {



    return(
       <React.Fragment>
<Grid xs={12} md={6} alignItems={"center"} direction={"column"} zIndex={"1"} container>

          <Grid md={6} 
          direction={"row"}>
            <Typography
              variant="h2"
              component="h2"
              sx={{ color: "var(--fontcolor)", fontWeight:"bolder"}}
            >
              GABRIEL
            </Typography>
            
          </Grid>

          <Grid
          md={6}
          direction={"row"}
          >
          <Typography variant="h4" component="h4" sx={{color: "var(--light2)", fontWeight:"500"}}>
              V I E I R A
            </Typography>
          </Grid>

          <Typography variant="h6" component="h4" sx={{color: "var(--light2)", fontWeight:"100", fontStyle:"italic", zIndex:"1"}}>
FULLSTACK DEVELOPER
            </Typography>

</Grid>






          </React.Fragment>
         
    )

}