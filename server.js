const express = require('express');
const path = require('path')
const fareUtils = require('./fareutils')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))  //body parser enabler

app.use('/', express.static(path.join(__dirname, 'public_static')))

app.post('/calcfare', (req, res) => {
    let km = parseFloat(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareUtils.calcFare(km, min)

//    let fare=50;
//    fare+= (km>5) ? ((km-5)*10) : 0;
//    fare+= (min>15) ? ((min-15)*2) : 0;   //moved to fairutils

    res.send({fare: fare})
})

app.get('/rate', (req, res) => {
    res.send(fareUtils.rate)
})

exports = module.exports = app
