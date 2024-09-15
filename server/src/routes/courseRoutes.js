const express = require("express");
const router = express.Router();

const { getCourse, getLesson } = require("../controllers/courseController");

router.get("/", getCourse);
router.get("/:unit/:lesson", getLesson);

module.exports = router;