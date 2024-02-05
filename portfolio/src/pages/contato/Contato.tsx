import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Tab from "@mui/material/Tab";

// TODO
const menuPoint = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
export default function Contato() {
  



function handleChange() {
    console.log("Mudou Stepper");
    
}



const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quis hic enim voluptate rerum. Deserunt, corporis debitis quaerat inventore rem at quas modi excepturi cum cumque dolor fuga earum nam!";

  return (
    <React.Fragment>


        <Box >Junte-se a comunidade DevStackMaster para colaborar com outros desenvolvedores ou tirar suas dúvidas:
        <Tab className="ads-logo" href={`https://www.instagram.com/devstackmaster/`} target="_blank" rel="noopener" />
  
  <Divider>
    <Chip label="Sobre mim" size="medium" />
  </Divider>
  {content}
      </Box>

</React.Fragment>
  );
}
