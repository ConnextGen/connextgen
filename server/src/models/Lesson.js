const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  key: { type: String, required: true },
  order: { type: Number, required: true },
});

module.exports = mongoose.model("Lesson", lessonSchema);
