// ACMQuestions
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

app.use('/', indexRouter);

// if questionDB doesn't exist create it
mongoose.connect("mongodb://localhost:27017/questionDB", { useNewUrlParser : true , useUnifiedTopology : true});

//gets rid of deprecation warning
mongoose.set('useCreateIndex', true);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));