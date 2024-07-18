const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const userCourseSchema = new mongoose.Schema({
  courseInfo: {
    type: ObjectId,
    ref: "Course",
    required: true,
  }
});

const userSchema = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  permission: {
    type: String,
    enum: ["user", "schoolAdmin", "connextgenAdmin"],
    required: true,
    default: "user",
  },
  courses: [userCourseSchema],
});

module.exports = mongoose.model("User", userSchema);