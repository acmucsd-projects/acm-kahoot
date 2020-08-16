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

require('dotenv').config();
var name = process.env.NAME;
var dbpswd = process.env.DB_PSW;
var dbname = process.env.DB_NAME;
mongoose.connect(`mongodb+srv://${name}:${dbpswd}@cluster0-gzlxs.mongodb.net/${dbname}?retryWrites=true&w=majority` || `mongob://localhost:27017/${dbname}`, { useNewUrlParser: true, useUnifiedTopology:true, useFindAndModify : false});

//gets rid of deprecation warning
mongoose.set('useCreateIndex', true);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));