const mongoose = require("mongoose");


const questionSchema =  mongoose.Schema({
    name: { type: String, required: true },
    question: { type: String, required: true },
    answers: [{
      answer: String,
      correct: Boolean
    }],
    points: {type: Number, required: true},
    time: {type: Number, required: true}
  });

const packSchema = mongoose.Schema({
  name: { type: String, required: true },
  // questions: [questionSchema],
  questions: [String],
  description: { type: String, required: true },
});

exports.questionSchema = questionSchema;
exports.packSchema = packSchema;