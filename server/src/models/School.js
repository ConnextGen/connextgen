const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;


const addressSchema = new Schema({
  street: String,
  city: {type: String, required: true},
  state: {type: String, required: true, enum: ["AK", "AL", "AR", "AS", "AZ", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA", "MA", "MD", "ME", "MI", "MN", "MO", "MP", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UM", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"]},
  zip: String,
  country: String
});

const schoolSchema = new mongoose.Schema({
  name: {type: String, required: true},
  users: {
    type: [{type: ObjectId, ref: "User"}],
    required: true,
    default: [],
  },
  address: addressSchema,
});

module.exports = mongoose.model("School", schoolSchema);