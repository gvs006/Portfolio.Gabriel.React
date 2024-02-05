import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "../../pages/home/styles.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

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
    <Grid
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
      
      <AppBar position="static" sx={{borderRadius:"2%",backgroundColor:"inherit", color: "var(--fontcolorlight)", marginBottom: "60px", marginTop:"40px", width:"auto"}}>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab className="animateTab" label="HOME" href={`/`} sx={{ color: "var(--fontcolorlight)", fontSize: "1.2rem"}}/>
            {menuPoint}
            <Tab className="animateTab" label="PORTFÓLIO" href={`/my-projects`} sx={{ color: "var(--fontcolorlight)", fontSize: "1.2rem"}} />
            {menuPoint}
            <Tab className="animateTab" label="SOBRE" href={`/contact`} sx={{ color: "var(--fontcolorlight)", fontSize: "1.2rem"}} />
            {menuPoint}
          </Tabs>
        </Toolbar>
      </AppBar>
      </Grid>

      
      
    </>
  );
}
