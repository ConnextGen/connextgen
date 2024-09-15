const mongoose = require("mongoose");
const express = require("express");

const userRoutes = require("./routes/userRoutes");
const courseRoutes = require("./routes/courseRoutes");

const errorHandler = require("./middleware/errorMiddleware");


/* routes */

const router = express.Router();

router.use("/users", userRoutes);
router.use("/course", courseRoutes);
router.use(errorHandler);

module.exports = router;
