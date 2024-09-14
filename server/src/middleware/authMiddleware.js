const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const { getSessionData } = require("../services/sessionServices");

const User = require("../models/User");

const protect = asyncHandler(async (req, res, next) => {

  try {
    sessionId = req.signedCookies.sessionId;

    const userId = await getSessionData(sessionId);
    const user = await User.findById(userId).select("-password");
    
    if (!user) {
      throw new Error();
    }
  
    req.user = user;
    
    next();
  } catch (err) {
    res.status(403);
    throw new Error("User not authorized");
  }
})

module.exports = {
  protect,
}