const express = require('express');
var pdf = require("pdf-creator-node");

const path = require('path');
const fse = require('fs-extra');
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
const port = 8080;
let data = require('./pdf1.json');

let pathname = path.join(__dirname, '/htmlpages/index.html');
const html = fse.readFileSync(pathname, { encoding: 'utf8' });

var options = {
  format: "A4",
  orientation: "portrait",
  border: "10mm",
}

var document = {
  html: html,
  data: {
    data: data,
  },
  path: `./pdf/tax-file-${Date.now()}.pdf`,
  type: "",
};
app.get('/',(req,res) => {
  res.sendFile(__dirname+ "/logo.jpg")
})


app.post('/propertyInfo', (req, res) => {

  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  console.log("response##", req.body);
  data.property_information = req.body
  console.log("datalater", data);
  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})