const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const uuid = require("uuid");
const cookieParser = require("cookie-parser");

const { storeSessionData } = require("../services/sessionServices");

const User = require("../models/User");
const Unit = require("../models/Unit");


// @desc    Register user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { school, email, firstName, lastName, password } = req.body;
  
  // all fields required
  if (!school||!email||!firstName||!lastName||!password) {
    console.log(req.body, school, email, firstName, lastName, password);
    res.status(400);
    throw new Error("Missing fields.");
  }

  // email already registered
  if (await User.findOne({email})) {
    res.status(409);
    throw new Error("Email is registered to an existing account.");
  }

  // hash & salt password
  const hashedPassword = await bcrypt.hash(password, 10); // 10 round salt

  // fetch all units and their lessons
  const units = await Unit.find().populate('lessons');

  // initialize user progress for each unit
  const progress = units.map(unit => ({
    unit: unit._id,
    completedLessons: [],
    percentageCompleted: 0
  }));

  const newUser = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    progress
  });

  if (newUser) {
    /* store session info and generate cookie */
    const sessionInfo = generateSession(newUser.id);

    storeSessionData(sessionInfo.sessionId, sessionInfo.userId);

    res.cookie("sessionId", sessionInfo.sessionId, { 
      httpOnly: true, 
      signed: true, 
      sameSite: "lax", 
      maxAge: sessionInfo.expiryDate - new Date(),
    });

    /* return newly created user */
    res.status(201).json({
      _id: newUser.id,
      firstName,
      lastName,
      email,
    });
  } else {
    res.status(400); // validation failed
    throw new Error("User data invalid.");
  }
});


// @desc    Login user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  
  // all fields required
  if (!email||!password) {
    res.status(400);
    throw new Error("Missing fields.");
  }

  // check user exists
  const user = await User.findOne({email});

  // check password
  if (user && (await bcrypt.compare(password, user.password))) {

    /* store session info and generate cookie */
    const sessionInfo = generateSession(user.id);
    
    await storeSessionData(sessionInfo.sessionId, sessionInfo.userId);

    res.cookie("sessionId", sessionInfo.sessionId, { 
      httpOnly: true, 
      signed: true, 
      sameSite: "lax", 
      maxAge: sessionInfo.expiryDate - new Date(),
    });

    /* return newly created user */

    res.status(200).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Incorrect email or password.");
  }
});


// @desc    Login user
// @route   GET /api/users/me
// @access  Public
const getUser = asyncHandler(async (req, res) => {
  res.json({message: "get"});
});


// @desc    Get user progress and last visited unit/lesson
// @route   GET /api/users/:userId/progress
// @access  Private
const getProgress = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  // Find user and populate the progress, unit, and lesson details
  const user = await User.findById(userId)
    .populate('progress.unit')
    .populate('progress.completedLessons')
    .populate('lastVisited.unit')
    .populate('lastVisited.lesson');

  if (user) {
    res.status(200).json({
      progress: user.progress,
      lastVisited: user.lastVisited
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});


// @desc    Complete lesson
// @route   POST /api/users/:unit/:lesson
// @access  Public
const completeLesson = asyncHandler(async (req, res) => {
  const { unit, lesson } = req.params;
  const { userId } = req.body;

  // find user
  const user = await User.findById(userId);

  const currentUnit = await Unit.findOne({ title: unit }).populate('lessons');

  const currentLesson = currentUnit.lessons.find(l => l.title === lesson)._id;
  const totalLessons = currentUnit.lessons.length;

  let progress = user.progress.find(p => p.unit.equals(currentUnit._id));

  if (!progress.completedLessons.includes(currentLesson)) {
    progress.completedLessons.push(currentLesson);
    progress.percentage = Math.round(progress.completedLessons.length / totalLessons * 100);
  }

  user.lastVisited.unit = currentUnit._id;
  user.lastVisited.lesson = currentLesson;

  await user.save();
  res.status(200).json({ message: 'Progress updated successfully', user });
});


const generateSession = (userId) => {
  return {
    sessionId: uuid.v4(),
    userId,
    expiryDate: (new Date().getTime()+1000*60*60*24 * 3),
  };
}


module.exports = {
  registerUser,
  loginUser,
  getUser,
  getProgress,
  completeLesson
}