import React from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate=useNavigate()
  return (
    <Box
      style={{
        backgroundColor:"#ACDCFA",
        width: "100%",
        height: "625px",
       
        display:"flex"
      }}
    >
      <Box
        style={{
          color: "white",
   
          fontWeight: "bolder",
          font: "inherit",
          width: "50%",
         
        }}
      >
        <Image
        ml={"12px"}mt={"10px"}
          boxSize="40px"
          objectFit="cover"
          src="https://o.remove.bg/downloads/698f2348-ff4b-404f-8052-e2d8844b7103/1635070072489-removebg-preview.png"
          alt="Avenger"
        />
      
        <Box height={"200px"}width="100%" mt={"70px"} >
        <Text fontSize={"5xl"}fontWeight={"bold"}>Start Creating your personal blog today</Text>

        </Box>
        <Box>
        <Text>AppAvengers Blog site is where you can create your personal blogs for free. Just one click of Signup and you are ready to go. You can edit , delete or create your website from anywhere or from any device. Feel free to use our Website.</Text>
        </Box>
        <Button onClick={()=>navigate("/register")} backgroundColor={"#45E27E"} _hover={{ bg: "green" }} color="white" mt={"60px"}>Create Blog</Button>
      </Box>
     <Box  style={{ 
      
      }}>
        <Image  height="90%" src="https://o.remove.bg/downloads/a78fbc01-3ef4-411c-aa94-a95f8cfe9779/blog2-removebg-preview.png"/>
     </Box >
    
    </Box>
  );
};

export default Home;
