// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
//   // AA ADD KARO:
//   address: {
//     mobile: String,
//     address: String,
//     city: String,
//     pincode: String
//   }
// }, { timestamps: true });
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // AA NAVU ADD KARYU:
  address: {
    mobile: String,
    address: String,
    city: String,
    pincode: String
  }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);