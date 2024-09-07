const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const courseSchema = new mongoose.Schema({
  title: {type: String, required: true},
  description: { type: String },
  units: [{ type: ObjectId, ref: "Unit" }],
});

module.exports = mongoose.model("Course", courseSchema);