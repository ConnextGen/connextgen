const express = require("express");
const router = express.Router();

const { getCourse, getUnit, getLesson, getPreviousLesson, getNextLesson } = require("../controllers/courseController");

router.get("/", getCourse);
router.get("/:unit", getUnit);
router.get("/:unit/:lesson", getLesson);
router.get("/:unit/:lesson/previous", getPreviousLesson);
router.get("/:unit/:lesson/next", getNextLesson);

module.exports = router;