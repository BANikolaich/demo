var express = require('express');
var app = express();
var fs = require("fs");
const axios = require("axios");
require('dotenv').config()

app.get('/api/exampleB', (req, res) => {
   res.send("Hi from service B")
})
app.get('/api/callA', async (req, res) => {
   let result = await axios.get(`${process.env.SERVICE_A_URL}/api/exampleA`)
       .then(r => {
          return r.data
       }).catch(e => {
          return e
       })
   res.send(result)
})

var server = app.listen(process.env.SERVER_PORT, () => {
   var host = server.address().address
   console.log("Example app listening at http://%s:%s", host, process.env.SERVER_PORT)
})