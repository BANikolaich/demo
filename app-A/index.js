var express = require('express');
var app = express();
var fs = require("fs");
const axios = require('axios');
require('dotenv').config()

app.get('/api/exampleA', (req, res) => {
   res.end("Hi from service A")
})
app.get('/api/callB', async (req, res) => {
  let result = await axios.get(`${process.env.SERVICE_B_URL}/api/exampleB`)
      .then(d => {
          return d.data
      }).catch(e => {
          return e
      })
    res.send(result)
})

var server = app.listen( process.env.SERVER_PORT, () => {
   var host = server.address().address
   console.log("Example app listening at http://%s:%s", host, process.env.SERVER_PORT)
})