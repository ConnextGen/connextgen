const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  progress: [{
    unit: { type: ObjectId, ref: "Unit", required: true },
    completedLessons: [{ type: ObjectId, ref: "Lesson" }],
    percentage: { type: Number, default: 0 }
  }],
  lastVisited: {
    unit: { type: ObjectId, ref: "Unit" },
    lesson: { type: ObjectId, ref: "Lesson" }
  }
});

module.exports = mongoose.model("User", userSchema);