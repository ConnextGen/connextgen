const { createClient } = require("redis");


const redisClient = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
    }
});

async function connectRedisClient() {
  try {
    await redisClient.connect();
    console.log('Redis client connected');
  } catch (err) {
    console.error("Redis connection error:", err);
  }
}

module.exports = { connectRedisClient, redisClient };