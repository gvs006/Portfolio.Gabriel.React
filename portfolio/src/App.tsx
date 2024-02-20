import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import Header from "./components/global/Header";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./styles/styles.css";

// TODO REMOVAL
const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
]);
function App() {
  return (
    <Grid xs={12} container>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          background:
            "linear-gradient(0deg, rgba(0,212,255,1) 0%, rgba(25,107,245,1) 68%, rgba(2,0,36,1) 100%)",
            
        }}
      >
        <Box className="waves"> </Box>
        <Header></Header>
        
        <Grid xs={6}  justifyContent="space-evenly"></Grid>

        <Grid xs={6} alignSelf={"right"}>
          
        
        

        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>

        </Grid>
        
       
      </Box>
    </Grid>
  );
}

export default App;
