var pdf = require("pdf-creator-node");
var fs = require("fs");
const fse = require('fs-extra');
const path = require('path');
const data = require("./pdf1.json")
const data2 = require("./pdf2.json")

let pathname = path.join(__dirname, '/htmlpages/index.html');
const html = fse.readFileSync(pathname, { encoding: 'utf8' });

let headerContet = '<div style="text-align: end; font-weight: bold; font-size: 25px;"> Certificate Fee$19.12</div>'


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

  pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  }); 
/*
passport middleware
confire the file
route every requ to middleware

 */


// write a method to save the req.body in the database
    /*
    const db = connection.db(connectionObject)
    db.getConnection();
    const pdfTable = new PdfTable(req.body); - initialise or pass the req body to this constructor
    db.save(pdfTable)

     */

// app.post('/', (req, res) => {

//     var document = {
//         html: html,
//         data: {
//             data: req.body,
//         },
//         path: `./pdf/tax-file-${Date.now()}.pdf`,
//         type: "",
//     };

    

//     return res.send(
//         pdf.create(document, options)
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((error) => {
//                 console.error(error);
//             })
//     );
// });