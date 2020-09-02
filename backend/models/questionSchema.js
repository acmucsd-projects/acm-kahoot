var mongoose = require("mongoose");

var questionSchema =  mongoose.Schema({
    name: { type: String, required: true },
    question: { type: String, required: true },
    answer: { type: String, required: true },
    falseAnswers : [String]
  });

var packSchema = mongoose.Schema({
  name: { type: String, required: true },
  // questions: [questionSchema],
  questions: [String],
  description: { type: String, required: true },
});

exports.questionSchema = questionSchema;
exports.packSchema = packSchema;