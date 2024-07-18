require('dotenv').config({ path: "server/src/credentials/.env" })

const express = require("express"),
      api = require("./api");

const cors = require("cors");
1

const { connectMongoDB } = require("./db/mongoDB.js");
const { connectRedisClient } = require("./db/redisClient.js");

/* connect dbs */
connectMongoDB();
connectRedisClient();

/* port */
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIES_SECRET));

app.use("/api", api);

app.listen(port, () => {
  console.log("Server has been started on port " + port + ".");
});
