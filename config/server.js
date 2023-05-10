import express from "express";


const Server = express();

async function connectServer() {
    try {
      // Connect to server
      const ipAddress = "127.0.0.1";
      const port = 3000;

      Server.listen(port, ipAddress, () => {
      console.log(`Web Application Server is running on ${ipAddress} port ${port}`);
      console.log(`Address: http://${ipAddress}:${port}`);
      });
      
    } catch (err) {
      console.error(err);
    }
  
  }
  
  export default connectServer;