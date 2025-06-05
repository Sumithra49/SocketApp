const express = require("express");
//cretae server
const httpServer = require("http");
const { Server } = require("socket.io");
const app = express();
const server = httpServer.createServer(app); //creating  out first request made to server
const io = new Server(server); //connecting http with socket

app.use(express.static("public")); //index.html file will get linked here
// io.on("connection",()=>{
//     console.log("Connection is started")
// })
const user = {};

io.on("connection", (socket) => {
  console.log("Connection is started");
  //constantle listening for messges from client'
  socket.on("username", (name) => {
    user["userId"] = name;
  });
  socket.on("client message", (mesg) => {
    const name = user["userId"] || "Unknown";
    const fullmesg = `${name}:${mesg}`;
    console.log(mesg);
    //i want see in message in ui
    io.emit("message from server", fullmesg);
  });
  socket.on("disconnect", () => {
    console.log("Client is disconnected", socket.id);
  });
});
server.listen(8080, () => {
  console.log("server is running on http://localhost:8080 ");
});
