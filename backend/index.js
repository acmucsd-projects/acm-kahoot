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

const Question = mongoose.model("question", questionSchema);

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.post('/', function (req, res) {
    console.log("packName " + req.body.packName);
    var falseAnswers1 = [req.body.question1FAnswer1,req.body.question1FAnswer2];
    var falseAnswers2 = [req.body.question2FAnswer1,req.body.question2FAnswer2];
    const question1 = new Question({
        id: 1,
        name: req.body.question1Name,
        question: req.body.question1Question,
        answer: req.body.question1Answer,
        falseAnswers: falseAnswers1
    });
    const question2 = new Question({
        id: 2,
        name: req.body.question2Name,
        question: req.body.question2Question,
        answer: req.body.question2Answer,
        falseAnswers: falseAnswers2
    });
    var questions = [question1, question2];
    const pack1 = new Pack({
        id: 1,
        name: req.body.packName,
        questions: questions,
        description: req.body.packDesc
    });
    pack1.save();
    res.redirect("/");
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));