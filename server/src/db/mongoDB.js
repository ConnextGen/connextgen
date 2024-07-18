const mongoose = require("mongoose");


/* db connection and setup *///

const mongodbURI = process.env.MONGODB_URI;

mongoose.Promise = global.Promise; // use js promise

const connectMongoDB = () => {
  mongoose.connect(mongodbURI)
  .catch((err) => {
    console.error(err);
  });
}

module.exports = { connectMongoDB };