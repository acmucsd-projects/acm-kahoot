var express = require('express');
var path = require('path');
var router = express.Router();
const mongoose = require("mongoose");
var {questionSchema,packSchema} = require("../models/questionSchema");

// name of the collection Pack(s)
const Pack = mongoose.model("pack", packSchema);
const Question = mongoose.model("question", questionSchema);

/* GET home page. */
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

/* GET names & descriptions (of packs) as an array */
router.get('/packs/names',  function (req, res){
    Pack.find({}, function(err,p) {
        if (err) {
            res.status(400).json(err);
        } 
        let names = [];
        for (pac of p) {
            names.push([pac.name, pac.description]);
        }
        res.send(names);
    })
});

/* GET pack by id. */
router.get('/packs',  function (req, res){
    let id = req.body._id;
    Pack.findById(id, function(err,result){
        if (err) {
            res.status(400).json(err);
        } else {
            res.json(result)
        }
    });
});

/* POST packs. */
router.post('/packs',  function (req, res){

    let questionsId = [];
    // create pack
    const pack1 = new Pack({
        name: req.body.name,
        //questions: req.body.questions,
        questions: questionsId,
        description: req.body.description
    });
    pack1.save();
    
    var question;
    // create individual questions and save ids
    req.body.questions.forEach(async (i) => {
        //check to see if the question exists
        await Question.find({question:i.question}, function(err,resultDuplicate){
            if(err) return;
            if(resultDuplicate.length == 0){
                question = new Question({
                    name: i.name,
                    question: i.question,
                    answer: i.answer,
                    falseAnswers: i.falseAnswers
                });
                Question.create(question, function(err,result){
                    if(err) return;
                    questionsId.push([result._id]);
                    Pack.updateOne({_id:pack1._id}, { $addToSet: { questions: result._id} }, function(err){
                        if(err) {
                            console.log(err);
                        }
                    })
                })
            }
            // question exists, but add it to new pack
            else {
                //console.log("question already exists");
                for(let w = 0; w < resultDuplicate.length; w++)
                Pack.updateOne({_id:pack1._id}, { $addToSet: { questions: resultDuplicate[w]._id} }, function(err){
                    if(err) {
                        console.log(err);
                    }
                })
            }
        });
        
    })
    res.redirect("/");
});

/* DELETE pack by id. */
router.delete('/packs',  function (req, res){
    let id = req.body._id;
    //console.log(id)
    Pack.findByIdAndDelete(id, function(err){
        if (err) {
            res.status(400).json(err);
        } else {
            res.send("success")
        }
    });
});

/* DELETE question by id. */
router.delete('/packs/questions',  function (req, res){
    
    // find pack
    Pack.findById(req.body._id, function(err, result){

        if(result == null){
            res.send("pack does not exist");
            return;
        }
        // filter temp to be only questions not to be deleted
        let temp  = result.questions;
        req.body.questions.forEach(async (i)=>{
            temp = temp.filter((question) => {
                return (question != i);
            });
            await Pack.find({questions:{$in:i}},(err,result) => {
                let cnt = 0;
                for (pac of result) {
                    cnt++;
                    if(cnt == 2)
                        break;
                }
                if(cnt == 1){
                    Question.findByIdAndDelete(i, function(err){
                        if (err) {
                            console.log(err);
                        } 
                    })
                }
            })
        });
        //console.log(temp)
        // update the questions to not include deleted questions
        Pack.findOneAndUpdate({_id:req.body._id}, {questions:temp}, function(err){
            if (err) {
                res.status(400).json(err);
            } else {
                res.send("success");
            }
        });
        
    })
});

module.exports = router;