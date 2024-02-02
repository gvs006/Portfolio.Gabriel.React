import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

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
          sx={{backgroundColor:"#A1A2B2"}}
        >
      <Box>
        
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="HOME" href={`/`}/>
            {menuPoint}
            <Tab label="PROJETOS PESSOAIS" href={`/my-projects`} />
            {menuPoint}
            <Tab label="CONTATO" href={`/contact`} />
            {menuPoint}
          </Tabs>
          

        
      </Box>
      </Grid>

      
      
    </>
  );
}
