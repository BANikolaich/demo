var express = require('express');
const http2Express = require('http2-express-bridge')
const http2 = require('http2')
var app = http2Express(express);
var fs = require("fs");
const axios = require('axios');
require('dotenv').config()

//const options = {
//    allowHTTP1: true,
//    key: fs.readFileSync('./cert/anban_fun.key'),
//    cert: fs.readFileSync('./cert/app_a_anban_fun.crt')
//}

app.get('/api/exampleA', (req, res) => {
   res.send("Hi from service A")
})
app.get('/api/callB', async (req, res) => {
  let result = await axios.get(`${process.env.SERVICE_B_URL}/api/b-service`)
      .then(d => {
          return d.data
      }).catch(e => {
          return e
      })
    res.send(result)
})

app.get('/api/a-service', (req, res) => {
    res.send("application a service response")
})

const server = http2.createSecureServer(options, app)
server.listen(process.env.SERVER_PORT, () => {
   var host = server.address().address
   console.log("Example app listening at http://%s:%s", host, process.env.SERVER_PORT)
})