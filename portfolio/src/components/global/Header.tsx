import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "../../styles/styles.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import logo from "../../assets/logo.jpg";

export default function Header() {
  //   const [isTabSelected, setIsTabSelected] = useState<boolean>(true);
  const menuPoint = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const value = "TAB";
  function handleChange() {
    console.log("Mudou Tabs");
  }
  return (
    <>
    <Grid container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
      
      <AppBar position="static" sx={{borderRadius:"5%",backgroundColor:"inherit", color: "var(--fontcolorlight)", marginBottom: "30px", marginTop:"30px", width:"auto"}}>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >

            
            <Tab className="animateTab" label="HOME" href={`/`} sx={{ color: "var(--fontcolorlight)", fontSize: "1.1rem"}}/>
            {menuPoint}
            <Tab className="animateTab" label="PORTFÓLIO" href={`/my-projects`} sx={{ color: "var(--fontcolorlight)", fontSize: "1.1rem"}} />
            {menuPoint}
            <Tab className="animateTab" label="SOBRE" href={`/contact`} sx={{ color: "var(--fontcolorlight)", fontSize: "1.1rem"}} />
            {menuPoint}
          </Tabs>
        </Toolbar>
      </AppBar>
      </Grid>

      
      
    </>
  );
}
