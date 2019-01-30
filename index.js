import express from "express";
const app = express();

const handleListening = () => {
  console.log("Listening on:http://localhost:4000");
};

const handleHome = (req, res) => res.send("Hello from my");

app.get("/", handleHome);

app.listen(4000, handleListening);
