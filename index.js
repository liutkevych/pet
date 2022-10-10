const https = require("https");
const fs = require("fs");
const express = require("express");
const app = express();

const privateKey  = fs.readFileSync('./sslcert/key.pem', 'utf8');
const certificate = fs.readFileSync('./sslcert/cert.pem', 'utf8');
const credentials = {key: privateKey, cert: certificate};

const PORT = process.env.PORT || 8443;

https.createServer(credentials,app)
.listen(PORT, ()=>{
    console.log(`server is runing at port ${PORT}`)
});


app.get('/', (req,res)=>{
    res.send("Hello from express server.")
})