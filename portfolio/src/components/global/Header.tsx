import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
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
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
      <Box>
        
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="INÍCIO" />
            {menuPoint}
            <Tab label="PROJETOS PESSOAIS" />
            {menuPoint}
            <Tab label="CONTATO" href={`/contato`} />
            {menuPoint}
          </Tabs>
          
          <Box display="block" justifyContent="center" sx={{ top:90, right: 350, border: "1px solid purple", borderRadius: "5%", position:"fixed" }}>
        <Typography
          
          color="text.secondary"
        >
          Curriculum Interativo
        </Typography>
      </Box>

        <Typography variant="h2" component="h2">
        GABRIEL VIEIRA
        
      </Typography>
      </Box>
      </Grid>

      
      
    </>
  );
}
