const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  key: { type: String, required: true },
  description: { type: String },
  tags: [String],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lesson", lessonSchema);
