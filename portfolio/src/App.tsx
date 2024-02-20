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
    element: <div>Hello world!</div>,
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
        <Box className="waves">
        <Header></Header> 
        
        
        
        
        
        <Grid item xs={4} alignSelf={"right"}></Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={4}></Grid>
        
        
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        </Box>

      </Box>
    </Grid>
  );
}

export default App;
