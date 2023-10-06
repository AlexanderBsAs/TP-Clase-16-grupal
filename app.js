const express = require("express");
const app = express();
const path = require("path");

app.listen(3030, () => console.log("Levantando servidor en 3030"));

app.get("/",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/index.html")
res.sendFile(resolve)} )
app.get("/babbage",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/babbage.html")
res.sendFile(resolve)} )
app.get("/berners-lee",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/berners-lee.html")
res.sendFile(resolve)} )
app.get("/clarke",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/clarke.html")
res.sendFile(resolve)} )
app.get("/hamilton",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/hamilton.html")
res.sendFile(resolve)} )
app.get("/hopper",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/hopper.html")
res.sendFile(resolve)} )
app.get("/lovelace",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/lovelace.html")
res.sendFile(resolve) })
app.get("/turing",(req,res)=>
{let resolve=path.resolve(__dirname,"./views/turing.html")
res.sendFile(resolve)} )

app.use(express.static(path.join(__dirname,"public")));