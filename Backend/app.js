var express = require('express');
var mongoose = require('mongoose')
var multer = require('multer')
var bodyParser = require('body-parser')
const Routing = require("./Routes/index");
const fileUpload = require('express-fileupload');

var app = express()

const MONGODB = 'mongodb+srv://YashBaghel:yash12345@cluster0.fi9z3.mongodb.net/Upload_CSV?retryWrites=true&w=majority';
mongoose.connect(
  MONGODB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) throw err;
    else console.log("Mongo connected");
  }
);

app.use(fileUpload());

app.use(express.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/myapi', Routing)

app.listen(8080, () => console.log('server started at 8080'))