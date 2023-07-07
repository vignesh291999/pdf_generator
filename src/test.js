const express = require('express')
const path = require('path');
const fse = require('fs-extra')
const app = express();

const htmlpage = path.join(__dirname,"/htmlpages/app.html");
console.log("htmlpage",htmlpage);
const html = fse.readFileSync(htmlpage, { encoding: 'utf8' });
const data = {
    property_information: {
        file: "1643244",
        owner: "Ramachandr S",
        adress1: "5th main 2nd Cross",
        address2: "RR Nager",
        city_state_zip: "Jp Nager Bengalore 560005"
    },
    request_information: {
        requested_date: "04/13/2023",
        requested_by: "Chetana",
        date_completed: "04/13/2023",
        jurisdiction: 1,
        parcel: 1
    },
    tax_summary: {
        status: "paid",
        parcel: "111111",
        tax_year: "2020",
        inst: 1,
        tax_amount: "$0.00",
        penalty: "$0.00",
        total_due: "$0.00",
        due_date: "11/01/2023"
    },
    notes: {
        tax_notes: "2020-2022 Real Estate Taxes are paid as reported. There are no prior year delinquent taxes. Property received State Credit."
    },
    legal_description: {
        parcel: 111111
    },
    property_value_summary: {
        jurisdiction: "County - AZ",
        parcel: 1111111,
        year:2022,
        assessed_land:"$0.0",
        assessed_improvement :"$0.0",
        total_assessment :"$0.00",
    }

}

app.get('/', (req, res) => {
  return res.send(html);
});

app.get('/pdf1', (req, res) => {
  return res.send(html);
});

app.get('/pdf2', (req, res) => {
  return res.send(html);
});

app.post('/', (req, res) => {
    return res.send(data);
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });