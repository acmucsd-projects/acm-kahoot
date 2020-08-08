var mongoose = require("mongoose");

var questionSchema =  mongoose.Schema({
    id : { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    falseAnswers : [String]
  });

var packSchema = mongoose.Schema({
  id : { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  questions: [questionSchema],
  description: { type: String, required: true },
});

exports.questionSchema = questionSchema;
exports.packSchema = packSchema;