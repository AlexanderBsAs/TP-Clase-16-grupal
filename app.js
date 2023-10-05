const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => console.log("Levantando servidor en 3030"));

app.get("/",(req,res)=>
res.sendFile() )
app.get("/babbage",(req,res)=>
res.sendFile() )
app.get("/berners-lee",(req,res)=>
res.sendFile() )
app.get("/clarke",(req,res)=>
res.sendFile() )
app.get("/hamilton",(req,res)=>
res.sendFile() )
app.get("/hopper",(req,res)=>
res.sendFile() )
app.get("/lovelace",(req,res)=>
res.sendFile() )
app.get("/turing",(req,res)=>
res.sendFile() )