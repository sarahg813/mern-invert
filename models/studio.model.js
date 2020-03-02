const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studioSchema = new Schema({
  name: { type: String, required: true },
  address: {
    street: String,
    city: String,
    state: [],
    postalCode: String,
    country: String
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  phoneNum: String,
  email: String,
  website: String,
  picture: String,
  socialMedia: {},
  categories: []
});

const Studio = mongoose.model("Studio", studioSchema);

module.exports = Studio;
