const { redisClient } = require("../db/redisClient");

const SESSION_PREFIX = "session:";

async function storeSessionData(sessionId, userId) {
  try {
    await redisClient.set(`${SESSION_PREFIX}${sessionId}`, userId);
  } catch (error) {
    throw new Error("Error storing session data:", error);
  }
}

async function getSessionData(sessionId) {
  try {
    const userId = await redisClient.get(`${SESSION_PREFIX}${sessionId}`);
    return userId;
  } catch (error) {
    throw new Error("Error getting session data:", error);
      
  }
}

async function deleteSessionData(sessionId) {
  try {
    await redisClient.del(`${SESSION_PREFIX}${sessionId}`);
  } catch (error) {
    throw new Error("Error deleting session data:", error);
  }
}

module.exports = {
  storeSessionData,
  getSessionData,
  deleteSessionData,
}