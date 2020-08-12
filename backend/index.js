// Kahoot
var {questionSchema,packSchema} = require("./models/questionSchema");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

// if questionDB doesn't exist create it
mongoose.connect("mongodb://localhost:27017/questionDB", { useNewUrlParser : true , useUnifiedTopology : true});

//gets rid of deprecation warning
mongoose.set('useCreateIndex', true);

// name of the collection Pack(s)
const Pack = mongoose.model("pack", packSchema);
//const Question = mongoose.model("question", questionSchema);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/packs', function (req, res) {
    console.log("packName " + req.body.questions[0].name);
    const pack1 = new Pack({
        name: req.body.name,
        questions: req.body.questions,
        description: req.body.description
    });
    pack1.save();
    res.redirect("/");
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));