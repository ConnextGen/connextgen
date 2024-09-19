const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const { 
  registerUser, 
  loginUser, 
  getUser,
  getProgress,
  completeLesson
} = require("../controllers/userController");

router.post("/signup", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getUser);
router.get("/:userId/progress", getProgress);
router.post("/:unit/:lesson", completeLesson);

module.exports = router;