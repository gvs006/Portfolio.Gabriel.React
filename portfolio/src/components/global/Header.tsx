import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import "../../pages/home/styles.css";

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
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
      <Box sx={{ color: "var(--fontcolorlight)"}}>
        
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab className="animateTab" label="HOME" href={`/`} sx={{ color: "var(--fontcolorlight)"}}/>
            {menuPoint}
            <Tab className="animateTab" label="PROJETOS PESSOAIS" href={`/my-projects`} sx={{ color: "var(--fontcolorlight)"}} />
            {menuPoint}
            <Tab className="animateTab" label="SOBRE" href={`/contact`} sx={{ color: "var(--fontcolorlight)"}} />
            {menuPoint}
          </Tabs>
          

        
      </Box>
      </Grid>

      
      
    </>
  );
}
