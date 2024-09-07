const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const unitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  lessons: [{ type: ObjectId, ref: "Lesson" }],
});

module.exports = mongoose.model("Unit", unitSchema);
